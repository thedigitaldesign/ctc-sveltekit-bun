export const Create = `
  type mutation {
    ActivityCreate(type: String!): ActivityPayload
  }

  type Error { 
    message: String!
  }

  type ActivityPayload {
    errors: [Error!]!
    activity: Activity
  }
`