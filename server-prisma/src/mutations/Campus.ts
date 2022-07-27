import { Campus } from '@prisma/client'
import { Context } from '../context'
import { Campus as CampusModel, Error } from '../models'
import { datetime } from '../../helpers'

interface Payload {
  error: Error[]
  Campus: Campus | null
}

const CreateCampus = {
  createCampus: async (_: any, { name, CampusType }: CampusModel, { prisma }: Context): Promise<Payload> => {
    if (!name || !CampusType) {
      return {
        error: [
          {
            id: '123',
            created: datetime.now,
            message: 'You must provide a `name` and `CampusType` for Campus'
          }
        ],
        Campus: null
      }
    }

    const Campus = await prisma.campus.create({
      data: {
        name,
        fk_campustype_id: CampusType.id
      }
    })

    return { error: [], Campus }
  }
}

const DeleteCampus = {}

const UpdateCampus = {}

export const CampusMutation = {
  ...CreateCampus,
  ...DeleteCampus,
  ...UpdateCampus
}
