<script lang="ts">
  import { goto } from '$app/navigation'

  import { clientQuery } from '../../helpers'

  /*
    {
      "ref": Ref(Collection("TimeEntry"), "338935111972028481"),
      "ts": 1659492561240000,
      "data": {
        "date": "2021-10-08",
        "description": "Counselor PD",
        "start_time": "08:00:00 AM",
        "end_time": "12:00:00 PM",
        "fk_activity_id": "[System Support] Professional Development / Collabaoration",
        "length_of_time": 240,
        "eighty_twenty": "Counseling",
        "this_month": false,
        "this_week": false,
        "today": false,
        "fk_counselor_id": "counselor1@highschool1.com",
        "campus": "High School 1",
        "type": "Secondary"
      }
    }

    FQL
    {
      name: "getTimeEntriesBetweenDates",
      unique: false,
      serialized: true,
      source: "TimeEntry",
      terms: [
        {
          field: ["data", "start_time"]
        },
        {
          field: ["data", "end_time"]
        }
      ]
    }

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
        },
        {
          field: ["data", "start_time"]
        },
        {
          field: ["data", "end_time"]
        }
      ]
    }
  */

  const query = `#graphql
    query {
      getTimeEntries (_size: 100) {
        data {
          _id
          date
          description
          start_time
          end_time
          length_of_time
          fk_activity_id
          fk_counselor_id
        }
      }
    }
  `

  $: timeEntries = clientQuery(query)
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Time Entry</h1>
        <p class="mt-2 text-sm text-gray-700">A list of all data per counselor in your district.</p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          type="button"
          on:click={() => goto('/time-entry/create')}
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
          Add Time Entry
        </button>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Date</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Counselor</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Campus</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Start Time</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">End Time</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Length of Time</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                {#if $timeEntries.fetching}
                  <p>Loading...</p>
                {:else if $timeEntries.error}
                  <p>
                    Oh no! {$timeEntries.error.message}
                  </p>
                {:else}
                  {#each $timeEntries.data.getTimeEntries.data as item}
                    <tr>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{item.date}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.fk_counselor_id === '338761128454651973' ? 'Riley Speach' : 'Jeromy Hudnut'}
                      </td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">TODO</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.description}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.start_time}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.end_time}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.length_of_time}</td>
                      <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a sveltekit:prefetch href={`/time-entry/${item._id}`} class="text-indigo-600 hover:text-indigo-900">
                          Edit<span class="sr-only">, ${item.name}}</span>
                        </a>
                      </td>
                    </tr>
                  {/each}
                {/if}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
</style>
