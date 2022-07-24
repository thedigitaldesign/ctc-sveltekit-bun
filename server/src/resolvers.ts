import { Mutation } from './mutations'
import { Resolvers as Query } from './resolvers/index'
import { datetime } from '../helpers'

console.log(`Dayjs: `, datetime.now)
console.log(`Dayjs dateOnly: `, datetime.dateOnly)
console.log(`Dayjs timeOnly: `, datetime.timeOnly)
console.log(`Dayjs lengthOfTimeInMinutes: `, datetime.lengthOfTimeInMinutes('09:30:00 AM', '11:30:00 AM'))

export const resolvers = {
  Query,
  Mutation
}
