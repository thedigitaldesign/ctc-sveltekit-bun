import { TimeEntry } from '@prisma/client'
import { Context } from '../context'
import { TimeEntry as TimeEntryModel } from '../models'

export const TimeEntryResolver = {
  getTimeEntries: (_: any, __: any, { prisma }: Context) => {
    return prisma.timeEntry.findMany()
  },
  // This needs to be update to target a specific user
  getTimeEntriesBetweenDates: async (_: any, { start_date, end_date }: any, { prisma }: Context) => {
    const timeEntry = await prisma.timeEntry.findMany({
      where: {
        start_time: {
          lte: end_date,
          gte: start_date
        }
      }
    })

    let non = 0
    let counseling = 0

    timeEntry.forEach((entry: TimeEntry) => {
      if (entry.fk_activity_id !== 'cl61aooeq0067ljj4spyy70a9') {
        counseling += entry.length_of_time
        return
      }

      non += entry.length_of_time
    })

    let total = counseling + non

    const percentCounseling = ((counseling / total) * 100).toFixed(2)
    const percentNonCounseling = ((non / total) * 100).toFixed(2)

    console.log(`Counseling Time: ${counseling}`)
    console.log(`Non-counseling Time: ${non}`)
    console.log(`Total Time: ${total}`)
    console.log(`Percent Counseling: %${percentCounseling}`)
    console.log(`Percent Non-Counseling: %${percentNonCounseling}`)

    return timeEntry
  }
}
