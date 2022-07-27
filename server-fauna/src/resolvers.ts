import { Mutation } from './mutations'
import { Resolvers as Query } from './resolvers/index'
import { datetime } from '../helpers'

console.log(`Dayjs: `, datetime.now)
console.log(`Dayjs Guess: `, datetime.guess)
console.log(`Dayjs dateOnly: `, datetime.dateOnly)
console.log(`Dayjs timeOnly: `, datetime.timeOnly)
console.log(`Dayjs lengthOfTimeInMinutes: `, datetime.lengthOfTimeInMinutes('2022-07-25T08:00:00-05:00', '2022-07-25T13:00:00-05:00'))
console.log(`Dayjs formatter: `, datetime.formatter('2022-07-25T08:00:00'))

export const resolvers = {
  Query,
  Mutation
}
