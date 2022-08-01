<script lang="ts">
  import { goto } from '$app/navigation'
  import { datetime, clientMutation, clientQuery, alphaDesc } from '../helpers'

  export let categoryData: any

  interface Variables {
    created: string
    name: string
    email: string
    fk_campus_id: string
  }

  let variables: Variables = {
    created: datetime.now,
    name: '',
    email: '',
    fk_campus_id: ''
  }
  let categoryId = null
  $: console.log('categoryData: ', categoryData)

  if (categoryData) {
    const data = categoryData.data.findCategoryByID
    categoryId = data._id

    variables = {
      created: data.created || datetime.now,
      name: data.name,
      email: data.email,
      fk_campus_id: data.fk_campus_id
    }
  }

  console.log('categoryId: ', categoryId)

  const query = `#graphql
    query {
      getCampus {
        data {
          _id
          name
        }
      }
    }
  `
  const create = `#graphql
    mutation (
      $created: String!
      $name: String!
    ) {
      createCategory (data: {
        created: $created
        name: $name
      }) {
        _id
        created
        name
      }
    }
  `
  const update = `#graphql
    mutation (
      $created: String!
      $name: String!
    ) {
      updateCategory (
        id: ${categoryId}, 
        data: {
          created: $created
          name: $name
        }) {
        _id
        created
        name
      }
    }
  `

  let campus = clientQuery(query)
  $: console.log('variables: ', variables)

  const clearVariables = () => {
    variables = {
      created: datetime.now,
      name: '',
      email: '',
      fk_campus_id: ''
    }
  }

  const saveCategory = () => {
    if (categoryId) {
      clientMutation(update, variables)
      clearVariables()
      return goto(`/category`)
    }

    clientMutation(create, variables)
    clearVariables()
    return goto(`/category`)
  }
  // BUG: When you edit and then click `Save and create new` the record updates,
  //      but when you create a new record and click `Save and create new` again
  //      it updates the old record because of the check for `categoryId`.
  const saveAndCreate = () => {
    if (categoryId) {
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

    return goto(`/category`)
  }
</script>

<template>
  <form on:submit|preventDefault={saveCategory} class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200">
      <div>
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="name" class="block text-sm font-medium text-gray-700"> Category name </label>
            <div class="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                bind:value={variables.name}
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
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
