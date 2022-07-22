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
`
