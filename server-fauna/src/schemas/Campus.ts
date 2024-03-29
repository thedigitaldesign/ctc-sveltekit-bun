/*
  model Campus {
    id      String   @id @default(cuid())
    created DateTime @default(now())
    name    String

    // Foreign Keys & References
    Counselor        Counselor[]
    CampusType       CampusType  @relation(fields: [fk_campustype_id], references: [id])
    fk_campustype_id String
  }
*/

export const Campus = `
  type Campus {
    id: ID!
    created: String!
    name: String!
    CampusType: CampusType!
    fk_campustype_id: String!
  }

  type CampusPayload {
    error: [Error!]!
    Campus: Campus
  }

  type Mutation {
    createCampus(name: String!, CampusType: CampusTypeInput!): CampusPayload!
  }

  input CampusTypeInput {
    id: ID!
  }
`
