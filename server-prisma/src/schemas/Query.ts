export const Query = `
  type Query {
    getActivities: [Activity!]!
    getCampus: [Campus!]!
    getCampusTypes: [CampusType!]!
    getCategories: [Category!]!
    getCounselors: [Counselor!]!
    getSubCategories: [SubCategory!]!
    getTimeEntries: [TimeEntry!]!
    getTimeEntriesBetweenDates(start_date: String!, end_date: String!): [TimeEntry!]!
  }
`
