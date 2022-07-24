import { Context } from '../context'
import { Activity } from '../models'

const CreateActivity = {
  createActivity: async (_: any, { type, Category }: Activity, { prisma }: Context) => {
    prisma.activity.create({
      data: {
        type,
        fk_category_id: Category.id
      }
    })
  }
}

const DeleteActivity = {
  
}

const UpdateActivity = {
  
}

export const ActivityMutation = {
  ...CreateActivity,
  ...DeleteActivity,
  ...UpdateActivity
}
