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
  type CampusType {
    id: ID!
    created: String!
    type: String!
  }

  type CampusTypePayload {
    error: [Error!]!
    CampusType: CampusType
  }

  type Mutation {
    createCampusType(type: String!): CampusTypePayload!
  }
`
