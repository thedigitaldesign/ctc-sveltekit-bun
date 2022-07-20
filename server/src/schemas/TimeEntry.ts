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
  id: ID!
  created: String!
  description: String!
  start_time: String!
  end_time: String!
  activity: Activity!
  fk_activity_id: String!
`