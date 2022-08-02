<script lang="ts">
  import ActivityDetails from '../../components/ActivityDetails.svelte'
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Add Activity</h1>
        <p class="mt-2 text-sm text-gray-700">Add an activity that is part of your district.</p>
      </div>
    </div>

    <ActivityDetails activityData={null} />
  </div>
</template>

<style lang="less">
</style>
