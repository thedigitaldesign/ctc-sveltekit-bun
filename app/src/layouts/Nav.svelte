<script lang="ts">
</script>

<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a href="/" class="nav-link" aria-current="page">Home</a>
              <span class="inline-block px-1 text-white">|</span>
              <a href="/campus" class="nav-link" aria-current="page">Campus</a>
              <a href="/counselor" class="nav-link" aria-current="page">Counselors</a>
              <span class="inline-block px-1 text-white">|</span>
              <a href="/category" class="nav-link" aria-current="page">Category</a>
              <a href="/subcategory" class="nav-link" aria-current="page">Subcategory</a>
              <a href="/activity" class="nav-link" aria-current="page">Activity</a>
              <span class="inline-block px-1 text-white">|</span>
              <a href="/time-entry" class="nav-link" aria-current="page">Time Entry</a>
              <a href="/report" class="nav-link" aria-current="page">Report</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="less">
  .nav-link {
    @apply bg-gray-900 text-white px-2 py-1 rounded-md text-sm font-medium;
  }
</style>
