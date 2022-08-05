<script lang="ts">
  import { clientQuery } from '../../helpers'

  /*
    {
      name: "getTimeEntriesByDateRange",
      unique: false,
      serialized: true,
      source: "TimeEntry",
      terms: [
        {
          field: ["data", "fk_counselor_id"]
        },
        {
          field: ["data", "date"]
        }
      ]
    }
  */

  const query = `#graphql
    query {
      getTimeEntriesBetweenDates (fk_counselor_id: "counselor1@highschool1.com", from_date: "2021-10-10", to_date: "2021-12-10") {
        description
      }
    }
  `

  $: timeEntry = clientQuery(query)

  // if ($timeEntry.fetching) {
  // }
</script>

<template>
  <div />
</template>

<style lang="less">
</style>
