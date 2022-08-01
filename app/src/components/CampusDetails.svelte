<script lang="ts">
  import { goto } from '$app/navigation'
  import { datetime, clientMutation, clientQuery } from '../helpers'

  export let campusData: any

  interface Variables {
    created: string
    name: string
    fk_campustype_id: string
  }

  let variables: Variables = {
    created: datetime.now,
    name: '',
    fk_campustype_id: ''
  }
  let campusId = null
  $: console.log('campusData: ', campusData)

  if (campusData) {
    const data = campusData.data.findCampusByID
    campusId = data._id

    variables = {
      created: data.created || datetime.now,
      name: data.name,
      fk_campustype_id: data.fk_campustype_id
    }
  }

  console.log('campusId: ', campusId)

  const query = `#graphql
    query {
      getCampusTypes {
        data {
          _id
          type
        }
      }
    }
  `
  const create = `#graphql
    mutation ($created: String!, $name: String!, $fk_campustype_id: ID!) {
      createCampus (data: {
        created: $created
        name: $name
        fk_campustype_id: $fk_campustype_id
      }) {
        _id
        created
        name
        fk_campustype_id
      }
    }
  `
  const update = `#graphql
    mutation (
      $created: String!,
      $name: String!,
      $fk_campustype_id: ID!
    ) {
      updateCampus (
        id: ${campusId}, 
        data: {
          created: $created
          name: $name
          fk_campustype_id: $fk_campustype_id
        }) {
        _id
        created
        name
        fk_campustype_id
      }
    }
  `

  let campusTypes = clientQuery(query)
  $: console.log('variables: ', variables)

  const clearVariables = () => {
    variables = {
      created: datetime.now,
      name: '',
      fk_campustype_id: ''
    }
  }

  const saveCampus = () => {
    if (campusId) {
      clientMutation(update, variables)
      clearVariables()
      goto(`/campus`)
      return
    }

    clientMutation(create, variables)
    clearVariables()
    goto(`/campus`)
    return
  }
  const saveAndCreate = () => {
    if (campusId) {
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

    goto(`/campus`)
  }
</script>

<template>
  <form on:submit|preventDefault={saveCampus} class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200">
      <div>
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="district" class="block text-sm font-medium text-gray-700"> District </label>
            <div class="mt-1">
              <input
                type="text"
                name="district"
                id="district"
                value="Texas School District 1"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="Campus" class="block text-sm font-medium text-gray-700"> Campus </label>
            <div class="mt-1">
              <input
                type="text"
                name="campus"
                id="campus"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                bind:value={variables.name}
              />
            </div>
          </div>

          <div class="sm:col-span-6">
            <fieldset class="mt-6">
              <legend class="contents text-base font-medium text-gray-900">Campus Types</legend>
              <div class="mt-4 space-y-4">
                {#if $campusTypes.fetching}
                  <p>Loading...</p>
                {:else if $campusTypes.error}
                  <p>
                    Oh no! {$campusTypes.error.message}
                  </p>
                {:else}
                  {#each $campusTypes.data.getCampusTypes.data as item}
                    <div class="flex items-center">
                      <input
                        id="campus-type-${item.type}"
                        name="campus-types"
                        type="radio"
                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        bind:group={variables.fk_campustype_id}
                        value={item._id}
                      />
                      <label for="campus-type-${item.type}" class="ml-3 block text-sm font-medium text-gray-700"> {item.type} </label>
                    </div>
                  {/each}
                {/if}
              </div>
            </fieldset>
          </div>
        </div>

        <div class="pt-6">
          <div class="flex justify-end">
            <button
              type="button"
              on:click={cancel}
              class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Cancel
            </button>
            <button
              type="button"
              on:click={saveAndCreate}
              class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save and create new
            </button>
            <button
              type="submit"
              class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
