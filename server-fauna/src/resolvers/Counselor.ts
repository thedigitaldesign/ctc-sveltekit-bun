import { Context } from '../context'

export const CounselorResolver = {
  getCounselors: (_: any, __: any, { prisma }: Context) => {
    return prisma.counselor.findMany()
  }

  /* 
    TODO 
      - getCounselorsByDistrict
      - getCounselorsByEmail
      - getCounselorsByID
  */
}
