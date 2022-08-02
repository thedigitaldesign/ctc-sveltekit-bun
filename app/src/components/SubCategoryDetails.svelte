<script lang="ts">
  import { goto } from '$app/navigation'
  import { datetime, clientMutation, clientQuery, alphaDesc } from '../helpers'

  export let subcategoryData: any
  $: console.log('subcategoryData: ', subcategoryData)

  interface Variables {
    created: string
    name: string
    fk_category_id: string
  }

  let variables: Variables = {
    created: datetime.now,
    name: '',
    fk_category_id: ''
  }
  let subcategoryId = null

  if (subcategoryData) {
    const data = subcategoryData.data.findSubCategoryByID
    subcategoryId = data._id

    variables = {
      created: data.created || datetime.now,
      name: data.name,
      fk_category_id: data.fk_category_id
    }
  }

  console.log('subcategoryId: ', subcategoryId)

  const query = `#graphql
    query {
      getCategories {
        data {
          _id
          name
        }
      }
    }
  `
  const create = `#graphql
    mutation ($created: String!, $name: String!, $fk_category_id: ID!) {
      createSubCategory (data: {
        created: $created
        name: $name
        fk_category_id: $fk_category_id
      }) {
        _id
        created
        name
        fk_category_id
      }
    }
  `
  const update = `#graphql
    mutation (
      $created: String!,
      $name: String!,
      $fk_category_id: ID!
    ) {
      updateSubCategory (
        id: ${subcategoryId}, 
        data: {
          created: $created
          name: $name
          fk_category_id: $fk_category_id
        }) {
        _id
        created
        name
        fk_category_id
      }
    }
  `

  let category = clientQuery(query)
  $: console.log('variables: ', variables)

  const clearVariables = () => {
    variables = {
      created: datetime.now,
      name: '',
      fk_category_id: ''
    }
  }

  const saveSubcategory = () => {
    if (subcategoryId) {
      clientMutation(update, variables)
      clearVariables()
      return goto(`/subcategory`)
    }

    clientMutation(create, variables)
    clearVariables()
    return goto(`/subcategory`)
  }
  // BUG: When you edit and then click `Save and create new` the record updates,
  //      but when you create a new record and click `Save and create new` again
  //      it updates the old record because of the check for `subcategoryId`.
  const saveAndCreate = () => {
    if (subcategoryId) {
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

    return goto(`/subcategory`)
  }
</script>

<template>
  <form on:submit|preventDefault={saveSubcategory} class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200">
      <div>
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="name" class="block text-sm font-medium text-gray-700"> Name </label>
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

          <div class="sm:col-span-6">
            <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
            {#if $category.fetching}
              <p>Loading...</p>
            {:else if $category.error}
              <p>
                Oh no! {$category.error.message}
              </p>
            {:else}
              <select
                id="category"
                name="category"
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                bind:value={variables.fk_category_id}
              >
                {#each alphaDesc($category.data.getCategories.data, 'name') as item}
                  <option value={item._id}>{item.name}</option>
                {/each}
              </select>
            {/if}
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
