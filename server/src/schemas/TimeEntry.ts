/*
  model TimeEntry {
    id          String    @id @default(cuid())
    created     DateTime  @default(now())
    description String
    start_time  DateTime?
    end_time    DateTime?
    this_month  Boolean
    this_week   Boolean
    today       Boolean

    // Foreign Keys & References
    Activity       Activity @relation(fields: [fk_activity_id], references: [id])
    fk_activity_id String
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
    fk_activity_id: String!
  }

  type TimeEntryPayload {
    error: [Error!]!
    TimeEntry: TimeEntry
  }

  type Mutation {
    createTimeEntry(description: String!, start_time: String!, end_time: String!, Activity: ActivityInput): TimeEntryPayload
  }

  input ActivityInput {
    id: ID!
  }
`
