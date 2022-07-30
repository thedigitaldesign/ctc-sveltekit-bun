import { createClient, getContextClient, setContextClient, mutationStore, queryStore, gql } from '@urql/svelte'

const url = import.meta.env.VITE_FAUNA_URL

export const client = createClient({
  url,
  fetchOptions: () => {
    const token = import.meta.env.VITE_FAUNA_KEY_ADMIN

    return {
      headers: { authorization: token ? `Bearer ${token}` : '' }
    }
  }
})

export const clientQuery = (query: any) => {
  return queryStore({ client, query })
}

export const clientMutation = (query: any, variables: any) => {
  console.log('client > clientMutation > query: ', query)
  console.log('client > clientMutation > variables: ', variables)
  return mutationStore({ client, query, variables })
}
