/*
  model TimeEntry {
    id             String    @id @default(cuid())
    created        DateTime  @default(now())
    description    String
    start_time     DateTime?
    end_time       DateTime?
    length_of_time Int       @default(0)

    // Foreign Keys & References
    Activity        Activity  @relation(fields: [fk_activity_id], references: [id])
    fk_activity_id  String
    Counselor       Counselor @relation(fields: [fk_counselor_id], references: [id])
    fk_counselor_id String
  }
*/

export const TimeEntry = `
  type TimeEntry {
    id: ID!
    created: String!
    description: String!
    start_time: String!
    end_time: String!
    length_of_time: Int!
    Activity: Activity!
    Counselor: Counselor!
    fk_activity_id: String!
    fk_counselor_id: String!
  }

  type TimeEntryPayload {
    error: [Error!]!
    TimeEntry: TimeEntry
  }

  type Mutation {
    createTimeEntry(description: String!, start_time: String!, end_time: String!, Activity: ActivityInput!, Counselor: CounselorInput!): TimeEntryPayload
  }

  input ActivityInput {
    id: ID!
  }

  input CounselorInput {
    id: ID!
  }
`
