<script context="module" lang="ts">
  import { clientQuery } from '../../helpers'

  export const load = ({ params }) => {
    const id = params.id

    const query = `#graphql
      query {
        findCounselorByID(id: ${id}) {
          _id
          created
          name
          email
          fk_campus_id
        }
      }
    `

    const counselor = clientQuery(query)

    return {
      props: {
        counselor
      }
    }
  }
</script>

<script lang="ts">
  import CounselorDetails from '../../components/CounselorDetails.svelte'
  export let counselor: any

  const counselorData = counselor
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Update Counselor</h1>
        <p class="mt-2 text-sm text-gray-700">Update a counselor that is part of your district.</p>
      </div>
    </div>

    {#if $counselorData.fetching}
      <p>Loading...</p>
    {:else if $counselorData.error}
      {#each $counselorData.error as error}
        <p>{error.message}</p>
      {/each}
    {:else}
      <CounselorDetails counselorData={$counselorData} />
    {/if}
  </div>
</template>

<style lang="less">
</style>
