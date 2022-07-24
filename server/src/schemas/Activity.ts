/*
  model Activity {
    id      String   @id @default(cuid())
    created DateTime @default(now())
    type    String

    // Foreign Keys & References
    TimeEntry      TimeEntry[]
    Category       Category    @relation(fields: [fk_category_id], references: [id])
    fk_category_id String
  }
*/

export const Activity = `
  type Activity {
    id: ID!
    created: String!
    type: String!
    Category: Category!
    fk_category_id: String!
  }

  type ActivityPayload {
    errors: [Error!]!
    Activity: Activity
  }

  type Mutation {
    createActivity(type: String!): ActivityPayload!
  }
`

// export const Activity = `
//   type Activity {
//     id: ID!
//     created: String!
//     type: String!
//     category(id: fk_category_id): Category
//     fk_category_id: String!
//   }
// `
