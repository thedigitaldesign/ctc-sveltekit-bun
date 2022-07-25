import { Context } from '../context'

export const TimeEntryResolver = {
  getTimeEntries: (_: any, __: any, { prisma }: Context) => {
    return prisma.timeEntry.findMany()
  }
}