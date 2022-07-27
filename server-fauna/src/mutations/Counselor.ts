import { Counselor } from '@prisma/client'
import { Context } from '../context'
import { Counselor as CounselorModel, Error } from '../models'
import { datetime } from '../../helpers'

interface Payload {
  error: Error[]
  Counselor: Counselor | null
}

const CreateCounselor = {
  createCounselor: async (_: any, { name, email, Campus }: CounselorModel, { prisma }: Context): Promise<Payload> => {
    if (!name || !email || !Campus) {
      return {
        error: [
          {
            id: '123',
            created: datetime.now,
            message: 'You must provide a `name`, `email`, and `Campus` for Counselor'
          }
        ],
        Counselor: null
      }
    }

    const Counselor = await prisma.counselor.create({
      data: {
        name,
        email,
        fk_campus_id: Campus.id
      }
    })

    return { error: [], Counselor }
  }
}

const DeleteCounselor = {}

const UpdateCounselor = {}

export const CounselorMutation = {
  ...CreateCounselor,
  ...DeleteCounselor,
  ...UpdateCounselor
}
