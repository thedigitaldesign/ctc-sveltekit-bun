<script lang="ts">
  import CampusDetails from '../../components/CampusDetails.svelte'
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Add Campus</h1>
        <p class="mt-2 text-sm text-gray-700">Add a campus that is part of your district.</p>
      </div>
    </div>

    <CampusDetails campusData={null} />
  </div>
</template>

<style lang="less">
</style>
