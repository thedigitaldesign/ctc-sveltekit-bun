import { ApolloServer } from 'apollo-server'
import { resolvers } from './resolvers'
import { Schema as typeDefs } from './schema'
import { context } from './context'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
})

server.listen().then(({ url }) => {
  console.log(`Server is ready at: ${url}`)
})
