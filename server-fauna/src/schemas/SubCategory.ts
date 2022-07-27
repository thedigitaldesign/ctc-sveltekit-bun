/*
  model SubCategory {
    id      String   @id @default(cuid())
    created DateTime @default(now())
    name    String

    // Foreign Keys & References
    Category Category[]
  }
*/

export const SubCategory = `
  type SubCategory {
    id: ID!
    created: String!
    name: String!
  }

  type SubCategoryPayload {
    error: [Error!]!
    SubCategory: SubCategory
  }

  type Mutation {
    createSubCategory(name: String!): SubCategoryPayload!
  }
`
