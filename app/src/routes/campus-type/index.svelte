<script lang="ts">
  import { clientQuery } from '../../helpers'
  // import { GetCampusTypes } from '../../models/GetCampusTypes'

  const query = `#graphql
    query {
      getCampusTypes {
        data {
          _id
          created
          type
        }
      }
    }
  `

  $: campusType = clientQuery(query)
</script>

<template>
  <div>
    <h2 class="text-xl text-purple-700 mb-4">Campus Types</h2>
  </div>

  {#if $campusType.fetching}
    <p>Loading...</p>
  {:else if $campusType.error}
    <p>
      Oh no! {$campusType.error.message}
    </p>
  {:else}
    <ul>
      {#each $campusType.data.getCampusTypes.data as item}
        <li>{item.type}</li>
      {/each}
    </ul>
  {/if}
</template>

<style lang="less">
</style>
