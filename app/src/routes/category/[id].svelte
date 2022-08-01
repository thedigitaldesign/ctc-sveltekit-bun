<script context="module" lang="ts">
  import { clientQuery } from '../../helpers'

  export const load = ({ params }) => {
    const id = params.id

    const query = `#graphql
      query {
        findCategoryByID(id: ${id}) {
          _id
          created
          name
        }
      }
    `

    const category = clientQuery(query)

    return {
      props: {
        category
      }
    }
  }
</script>

<script lang="ts">
  import CategoryDetails from '../../components/CategoryDetails.svelte'
  export let category: any

  const categoryData = category
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Update Category</h1>
        <p class="mt-2 text-sm text-gray-700">Update a category that will be used at a district level.</p>
      </div>
    </div>

    {#if $categoryData.fetching}
      <p>Loading...</p>
    {:else if $categoryData.error}
      {#each $categoryData.error as error}
        <p>{error.message}</p>
      {/each}
    {:else}
      <CategoryDetails categoryData={$categoryData} />
    {/if}
  </div>
</template>

<style lang="less">
</style>
