<script lang="ts">
  import CategoryDetails from '../../components/CategoryDetails.svelte'
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Add Category</h1>
        <p class="mt-2 text-sm text-gray-700">Add a category that will be used at a district level.</p>
      </div>
    </div>

    <CategoryDetails categoryData={null} />
  </div>
</template>

<style lang="less">
</style>
