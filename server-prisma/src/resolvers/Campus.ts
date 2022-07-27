import { Context } from '../context'

export const CampusResolver = {
  getCampus: (_: any, __: any, { prisma }: Context) => {
    return prisma.campus.findMany()
  }

  /* 
    TODO 
      - getCampusByDistrict
      - getCampusByEmail
      - getCampusByID
  */
}
