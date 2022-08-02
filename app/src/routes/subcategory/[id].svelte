<script context="module" lang="ts">
  import { clientQuery } from '../../helpers'

  export const load = ({ params }) => {
    const id = params.id

    const query = `#graphql
      query {
        findSubCategoryByID(id: ${id}) {
          _id
          created
          name
          fk_category_id
        }
      }
    `

    const subcategory = clientQuery(query)

    return {
      props: {
        subcategory
      }
    }
  }
</script>

<script lang="ts">
  import SubCategoryDetails from '../../components/SubCategoryDetails.svelte'
  export let subcategory: any

  const subcategoryData = subcategory
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Update Subcategory</h1>
        <p class="mt-2 text-sm text-gray-700">Update a subcategory that will be used at a district level.</p>
      </div>
    </div>

    {#if $subcategoryData.fetching}
      <p>Loading...</p>
    {:else if $subcategoryData.error}
      <p>{$subcategoryData.error.message}</p>
    {:else}
      <SubCategoryDetails subcategoryData={$subcategoryData} />
    {/if}
  </div>
</template>

<style lang="less">
</style>
