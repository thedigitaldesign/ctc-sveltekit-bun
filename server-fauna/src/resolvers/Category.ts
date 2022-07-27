import { Context } from '../context'

export const CategoryResolver = {
  getCategories: (_: any, __: any, { prisma }: Context) => {
    return prisma.category.findMany({
      orderBy: [{ name: 'desc' }]
    })
  }
}
