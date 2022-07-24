import { Context } from '../context'
import { Counselor } from '../models'

const CreateCounselor = {
  createCounselor: async (_: any, { name, email, Campus }: Counselor, { prisma }: Context) => {
    prisma.counselor.create({
      data: {
        name,
        email,
        fk_campus_id: Campus.id
      }
    })
  }
}

const DeleteCounselor = {
  
}

const UpdateCounselor = {
  
}

export const CounselorMutation = {
  ...CreateCounselor,
  ...DeleteCounselor,
  ...UpdateCounselor
}