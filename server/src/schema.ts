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
    schema.Payload, 
    schema.SubCategory, 
    schema.TimeEntry, 

    // Mutations
    // mutation.CreateActivity,        mutation.DeleteActivity,     mutation.UpdateActivity,
    // mutation.CreateCampus,       mutation.DeleteCampus,       mutation.UpdateCampus,
    // mutation.CreateCampusType,   mutation.DeleteCampusType,   mutation.UpdateCampusType,
    // mutation.CreateCategory,     mutation.DeleteCategory,     mutation.UpdateCategory,
    // mutation.CreateCounselor,    mutation.DeleteCounselor,    mutation.UpdateCounselor,
    // mutation.CreateSubCategory,  mutation.DeleteSubCategory,  mutation.UpdateSubCategory,
    // mutation.CreateTimeEntry,    mutation.DeleteTimeEntry,    mutation.UpdateTimeEntry
  ]
})
