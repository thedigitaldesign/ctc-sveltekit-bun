import { mergeResolvers } from '@graphql-tools/merge'
import { Mutation } from './mutations'
import { Resolvers as Query } from './resolvers/index'

export const resolvers = {
  Query,
  Mutation
}
