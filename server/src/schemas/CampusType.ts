/*
  model CampusType {
    id      String   @id @default(cuid())
    created DateTime @default(now())
    type    String

    // Foreign Keys & References
    Campus Campus[]
  }
*/

export const CampusType = `
  id: ID!
  created: String!
  type: String!
`
