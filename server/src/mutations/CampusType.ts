import { Context } from '../context'
import { CampusType } from '../models'

const CreateCampusType = {
  createCampusType: async (_: any, { type }: CampusType, { prisma }: Context) => {
    prisma.campusType.create({
      data: {
        type
      }
    })
  }
}

const DeleteCampusType = {
  
}

const UpdateCampusType = {
  
}

export const CampusTypeMutation = {
  ...CreateCampusType,
  ...DeleteCampusType,
  ...UpdateCampusType
}