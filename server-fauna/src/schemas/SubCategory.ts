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
    Category: Category!
    fk_category_id: ID!
  }

  type SubCategoryPayload {
    error: [Error!]!
    SubCategory: SubCategory
  }

  type Mutation {
    createSubCategory(name: String!, Category: CategoryInput!): SubCategoryPayload!
  }

  input CategoryInput {
    id: ID!
  }
`
