import { Activity } from '@prisma/client'
import { Context } from '../context'
import { Activity as ActivityModel, Error } from '../models'
import { datetime } from '../../helpers'

interface Payload {
  error: Error[]
  Activity: Activity | null
}

const CreateActivity = {
  createActivity: async (_: any, { type, Category }: ActivityModel, { prisma }: Context): Promise<Payload> => {
    if (!type || !Category) {
      return {
        error: [
          {
            id: '123',
            created: datetime.now,
            message: 'You must provide a `type` and `Category` for Activity'
          }
        ],
        Activity: null
      }
    }

    const Activity = await prisma.activity.create({
      data: {
        type,
        fk_category_id: Category.id
      }
    })

    return { error: [], Activity }
  }
}

const DeleteActivity = {}

const UpdateActivity = {}

export const ActivityMutation = {
  ...CreateActivity,
  ...DeleteActivity,
  ...UpdateActivity
}
