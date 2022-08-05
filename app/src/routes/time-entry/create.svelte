<script lang="ts">
  import TimeEntryDetails from '../../components/TimeEntryDetails.svelte'
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Add Time Entry</h1>
        <p class="mt-2 text-sm text-gray-700">Add a time entry.</p>
      </div>
    </div>

    <TimeEntryDetails timeEntryData={null} />
  </div>
</template>

<style lang="less">
</style>
