/*
  model Category {
    id      String   @id @default(cuid())
    created DateTime @default(now())
    name    String

    // Foreign Keys & References
    Activity          Activity[]
    SubCategory       SubCategory @relation(fields: [fk_subcategory_id], references: [id])
    fk_subcategory_id String
  }
*/

export const Category = `
  type Category {
    id: ID!
    created: String!
    name: String!
    sub_category: SubCategory
    fk_subcategory_id: String
  }
`
