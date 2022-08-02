<script context="module" lang="ts">
  import { clientQuery } from '../../helpers'

  export const load = ({ params }) => {
    const id = params.id

    const query = `#graphql
      query {
        findActivityByID(id: ${id}) {
          _id
          created
          type
          fk_category_id
        }
      }
    `

    const activity = clientQuery(query)

    return {
      props: {
        activity
      }
    }
  }
</script>

<script lang="ts">
  import ActivityDetails from '../../components/ActivityDetails.svelte'
  export let activity: any

  const activityData = activity
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Update Activity</h1>
        <p class="mt-2 text-sm text-gray-700">Update an activity that is part of your district.</p>
      </div>
    </div>

    {#if $activityData.fetching}
      <p>Loading...</p>
    {:else if $activityData.error}
        <p>{$activityData.error.message}</p>
    {:else}
      <ActivityDetails activityData={$activityData} />
    {/if}
  </div>
</template>

<style lang="less">
</style>
