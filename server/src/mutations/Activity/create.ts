import { Context } from '../../context'
import { Activity } from '../../models'

export const CreateActivity = {
  create_activity: async (_: any, { type }: Activity, { prisma }: Context) => {
    prisma.activity.create({
      data: {
        type
      }
    })
  }
}
