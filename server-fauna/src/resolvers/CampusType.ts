import { Context } from '../context'

export const CampusTypeResolver = {
  getCampusTypes: (_: any, __: any, { prisma }: Context) => {
    return prisma.campusType.findMany({
      orderBy: [{ type: 'desc' }]
    })
  }
}
