<script context="module" lang="ts">
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  
  import { clientMutation, clientQuery } from '../../client'
  import { datetime } from '../../helpers'

  export const load = ({ params }) => {
    const queryCampus = `#graphql
      query {
        findCampusByID(id: ${params.edit}) {
          _id
          name
          fk_campustype_id
        }
      }
    `

    const queryCampusType = `#graphql
      query {
        getCampusTypes {
          data {
            _id
            type
          }
        }
      }
    `

    const campus = clientQuery(queryCampus)
    const campusTypes = clientQuery(queryCampusType)

    return {
      props: {
        campus,
        campusTypes
      }
    }
  }
</script>

<script lang="ts">
  export let campus: any
  export let campusTypes: any

  interface Variables {
    created: string
    name: string
    fk_campustype_id: string
  }

  const data = $campus.data.findCampusByID

  let variables: Variables = {
    created: data.created || datetime.now,
    name: data.name,
    fk_campustype_id: data.fk_campustype_id
  }

  const mutation = `#graphql
    mutation ($id: ID!, $data: { $created: String! $name: String!, $fk_campustype_id: ID! }) {
      updateCampus (id: $id, data: {
        created: $created
        name: $name
        fk_campustype_id: $fk_campustype_id
      }) {
        name
      }
    }
  `

  $: console.log('variables: ', variables)

  const saveCampus = () => {
    clientMutation(mutation, variables)

    // goto(`/campus`)
  }
  const cancel = () => {
    variables = {
      created: '',
      name: '',
      fk_campustype_id: ''
    }

    goto(`/campus`)
  }
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Update Campus</h1>
        <p class="mt-2 text-sm text-gray-700">Update a campus that is part of your district.</p>
      </div>
    </div>

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
                <legend class="contents text-base font-medium text-gray-900">Push Notifications</legend>
                <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
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

          <div class="pt-5">
            <div class="flex justify-end">
              <button
                type="button"
                on:click={cancel}
                class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >Cancel</button
              >
              <button
                type="submit"
                class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >Save</button
              >
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="less">
</style>
