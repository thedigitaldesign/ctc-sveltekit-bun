<script context="module" lang="ts">
  import { clientQuery } from '../../helpers'

  export const load = ({ params }) => {
    const id = params.id

    const query = `#graphql
      query {
        findCampusByID(id: ${id}) {
          _id
          created
          name
          fk_campustype_id
        }
      }
    `

    const campus = clientQuery(query)

    return {
      props: {
        campus
      }
    }
  }
</script>

<script lang="ts">
  import CampusDetails from '../../components/CampusDetails.svelte'
  export let campus: any

  const campusData = campus
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Update Campus</h1>
        <p class="mt-2 text-sm text-gray-700">Update a campus that is part of your district.</p>
      </div>
    </div>

    {#if $campusData.fetching}
      <p>Loading...</p>
    {:else if $campusData.error}
      {#each $campusData.error as error}
        <p>{error.message}</p>
      {/each}
    {:else}
      <CampusDetails campusData={$campusData} />
    {/if}
  </div>
</template>

<style lang="less">
</style>
