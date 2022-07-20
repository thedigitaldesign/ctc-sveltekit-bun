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
  id: ID!
  created: String!
  name: String!
  email: String!
  campus: [Campus!]!
  fk_campus_id: String!
`
