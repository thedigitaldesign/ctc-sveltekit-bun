import * as resolver from "./resolvers" // For some reason this breaks when referencing index.ts
import * as mutation from './mutations'
import { Query } from "./resolvers/Query" // For some reason this breaks when referencing index.ts

export const resolvers = {
  Query
}
