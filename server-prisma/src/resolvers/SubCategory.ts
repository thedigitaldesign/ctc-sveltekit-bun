import { Context } from '../context'

export const SubCategoryResolver = {
  getSubCategories: (_: any, __: any, { prisma }: Context) => {
    return prisma.subCategory.findMany({
      orderBy: [{ name: 'desc' }]
    })
  }
}