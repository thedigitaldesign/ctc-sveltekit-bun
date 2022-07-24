import { makeExecutableSchema } from '@graphql-tools/schema'
import * as schema from './schemas'

export const Schema = makeExecutableSchema({
  typeDefs: [
    schema.Query,

    // Schemas
    schema.Activity,
    schema.Campus,
    schema.CampusType,
    schema.Category,
    schema.Counselor,
    schema.Error,
    schema.SubCategory,
    schema.TimeEntry
  ]
})
