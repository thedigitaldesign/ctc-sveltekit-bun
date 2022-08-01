<script lang="ts">
  import { goto } from '$app/navigation'

  import { alphaDesc, clientQuery } from '../../helpers'

  const query = `#graphql
    query {
      getSubCategories {
        data {
          _id
          name
          fk_category_id
        }
      }
    }
  `

  $: subcategories = clientQuery(query)
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Subcategory</h1>
        <p class="mt-2 text-sm text-gray-700">A list of all district approved subcategories.</p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          type="button"
          on:click={() => goto('/subcategory/create')}
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >Add Subcategory</button
        >
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Category</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                {#if $subcategories.fetching}
                  <p>Loading...</p>
                {:else if $subcategories.error}
                  <p>
                    Oh no! {$subcategories.error.message}
                  </p>
                {:else}
                  {#each alphaDesc($subcategories.data.getSubCategories.data, 'name') as item}
                    <tr>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{item.name}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item._id}</td>
                      <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a sveltekit:prefetch href={`/subcategory/${item._id}`} class="text-indigo-600 hover:text-indigo-900">
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
