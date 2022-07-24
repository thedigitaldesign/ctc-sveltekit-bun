/*
  model Counselor {
    id      String   @id @default(cuid())
    created DateTime @default(now())
    name    String
    email   String

    // Foreign Keys & References
    Campus       Campus @relation(fields: [fk_campus_id], references: [id])
    fk_campus_id String
  }
*/

export const Counselor = `
  type Counselor {
    id: ID!
    name: String!
    email: String!
    Campus: [Campus!]!
    fk_campus_id: String!
  }

  type CounselorPayload {
    errors: [Error!]!
    Counselor: Counselor
  }

  type Mutation {
    createCounselor(name: String!, email: String!, Campus: CampusInput): CounselorPayload!
  }

  input CampusInput {
    id: ID!
  }
`
