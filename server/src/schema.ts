import { makeExecutableSchema } from '@graphql-tools/schema'
import * as schema from './schemas'

// import { 
//   Query, 
//   SchemaActivity, 
//   SchemaCampus, 
//   SchemaCampusType, 
//   SchemaCategory, 
//   SchemaCounselor, 
//   SchemaSubCategory, 
//   SchemaTimeEntry 
// } from './schemas'

import * as mutation from './mutations'
// import { 
//   CreateActivity,     DeleteActivity,     UpdateActivity,
//   CreateCampus,       DeleteCampus,       UpdateCampus,
//   CreateCampusType,   DeleteCampusType,   UpdateCampusType,
//   CreateCategory,     DeleteCategory,     UpdateCategory,
//   CreateCounselor,    DeleteCounselor,    UpdateCounselor,
//   CreateSubCategory,  DeleteSubCategory,  UpdateSubCategory,
//   CreateTimeEntry,    DeleteTimeEntry,    UpdateTimeEntry
// } from './mutations'

export const schemas = makeExecutableSchema({
  typeDefs: [
    schema.Query,

    // Schemas
    schema.Activity,
    // schema.Campus, 
    // schema.CampusType, 
    schema.Category, 
    // schema.Counselor, 
    schema.SubCategory, 
    // schema.TimeEntry, 

    // Mutations
    // CreateActivity,     DeleteActivity,     UpdateActivity,
    // CreateCampus,       DeleteCampus,       UpdateCampus,
    // CreateCampusType,   DeleteCampusType,   UpdateCampusType,
    // CreateCategory,     DeleteCategory,     UpdateCategory,
    // CreateCounselor,    DeleteCounselor,    UpdateCounselor,
    // CreateSubCategory,  DeleteSubCategory,  UpdateSubCategory,
    // CreateTimeEntry,    DeleteTimeEntry,    UpdateTimeEntry
  ]
})
