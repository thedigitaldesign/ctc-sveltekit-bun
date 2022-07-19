import { makeExecutableSchema } from '@graphql-tools/schema'
import { Query } from './schemas'

export const schemas = makeExecutableSchema({
  typeDefs: [Query]
})
