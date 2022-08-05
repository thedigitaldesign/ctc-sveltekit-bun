<script lang="ts">
  import { goto } from '$app/navigation'
  import { datetime, clientMutation, clientQuery, alphaDesc } from '../helpers'

  export let timeEntryData: any

  interface Variables {
    created: string
    date: string
    description: string
    start_time: string
    end_time: string
    length_of_time: number
    fk_activity_id: string
    fk_counselor_id: string
  }

  let variables: Variables = {
    created: datetime.now,
    date: '',
    description: '',
    start_time: '',
    end_time: '',
    length_of_time: 0,
    fk_activity_id: '',
    fk_counselor_id: ''
  }
  let counselorId = null
  $: console.log('timeEntryData: ', timeEntryData)

  if (timeEntryData) {
    const data = timeEntryData.data.findCounselorByID
    counselorId = data._id

    variables = {
      created: data.created || datetime.now,
      date: data.date,
      description: data.description,
      start_time: data.start_time,
      end_time: data.end_time,
      length_of_time: data.length_of_time,
      fk_activity_id: data.fk_activity_id,
      fk_counselor_id: data.fk_counselor_id
    }
  }

  console.log('counselorId: ', counselorId)

  const queryActivity = `#graphql
    query($id: ID!) {
      findActivityByID(id: $id) {
        data {
          _id
          type
        }
      }
    }
  `
  const queryCounselor = `#graphql
    query($id: ID!) {
      findCounselorByID(id: $id) {
        data {
          _id
          name
        }
      }
    }
  `
  const create = `#graphql
    mutation ($created: String!, $name: String!, $email: String!, $fk_campus_id: ID!) {
      createCounselor (data: {
        created: $created
        name: $name
        email: $email
        fk_campus_id: $fk_campus_id
      }) {
        _id
        created
        name
        email
        fk_campus_id
      }
    }
  `
  const update = `#graphql
    mutation (
      $created: String!,
      $name: String!,
      $email: String!,
      $fk_campus_id: ID!
    ) {
      updateCounselor (
        id: ${counselorId}, 
        data: {
          created: $created
          name: $name
          email: $email
          fk_campus_id: $fk_campus_id
        }) {
        _id
        created
        name
        email
        fk_campus_id
      }
    }
  `

  let activity = clientQuery(queryActivity)
  let counselor = clientQuery(queryCounselor)

  $: console.log('variables: ', variables)

  const clearVariables = () => {
    variables = {
      created: datetime.now,
      date: '',
      description: '',
      start_time: '',
      end_time: '',
      length_of_time: 0,
      fk_activity_id: '',
      fk_counselor_id: ''
    }
  }

  const saveCounselor = () => {
    if (counselorId) {
      clientMutation(update, variables)
      clearVariables()
      return goto(`/counselor`)
    }

    clientMutation(create, variables)
    clearVariables()
    return goto(`/counselor`)
  }
  // BUG: When you edit and then click `Save and create new` the record updates,
  //      but when you create a new record and click `Save and create new` again
  //      it updates the old record because of the check for `counselorId`.
  const saveAndCreate = () => {
    if (counselorId) {
      clientMutation(update, variables)
      clearVariables()

      return
    }

    clientMutation(create, variables)
    clearVariables()

    return
  }
  const cancel = () => {
    clearVariables()

    return goto(`/counselor`)
  }
</script>

<template>
  <form on:submit|preventDefault={saveCounselor} class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200">
      <div>
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="date" class="block text-sm font-medium text-gray-700"> Date </label>
            <div class="mt-1">
              <input
                type="text"
                name="date"
                id="date"
                bind:value={variables.date}
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="email" class="block text-sm font-medium text-gray-700"> Email </label>
            <div class="mt-1">
              <input
                type="text"
                name="email"
                id="email"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                bind:value={variables.email}
              />
            </div>
          </div>

          <!-- <div class="sm:col-span-3">
            <label for="campus" class="block text-sm font-medium text-gray-700">Campus</label>
            {#if $campus.fetching}
              <p>Loading...</p>
            {:else if $campus.error}
              <p>
                Oh no! {$campus.error.message}
              </p>
            {:else}
              <select
                id="campus"
                name="campus"
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                bind:value={variables.fk_campus_id}
              >
                {#each alphaDesc($campus.data.getCampus.data, 'name') as item}
                  <option value={item._id}>{item.name}</option>
                {/each}
              </select>
            {/if}
          </div> -->
        </div>

        <div class="pt-6">
          <div class="flex justify-end">
            <button
              type="button"
              on:click={cancel}
              class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="button"
              on:click={saveAndCreate}
              class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save and create new
            </button>
            <button
              type="submit"
              class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="less">
</style>
