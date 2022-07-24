import { CampusType } from '@prisma/client'
import { Context } from '../context'
import { CampusType as CampusTypeModel, Error } from '../models'

interface CampusTypePayload {
  error: Error[],
  CampusType: CampusType | null
}

const CreateCampusType = {
  createCampusType: async (_: any, { type }: CampusTypeModel, { prisma }: Context): Promise<CampusTypePayload> => {
    const date = new Date()
    
    if(!type) {
      return {
        error: [{
          id: '123',
          created: date.toUTCString(),
          message: 'You must provide a `type` for CampusType'
        }],
        CampusType: null
      }
    }
    
    const CampusType = await prisma.campusType.create({
      data: {
        type
      }
    })

    return { error: [], CampusType }
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