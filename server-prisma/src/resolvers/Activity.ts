import { Context } from '../context'

export const ActivityResolver = {
  getActivities: (_: any, __: any, { prisma }: Context) => {
    return prisma.activity.findMany({
      orderBy: [{ type: 'desc' }]
    })
  }
}
