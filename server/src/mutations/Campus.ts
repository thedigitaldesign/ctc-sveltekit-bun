import { Context } from '../context'
import { Campus } from '../models'

const CreateCampus = {
  createCampus: async (_: any, { name, CampusType }: Campus, { prisma }: Context) => {
    prisma.campus.create({
      data: {
        name,
        fk_campustype_id: CampusType.id
      }
    })
  }
}

const DeleteCampus = {
  
}

const UpdateCampus = {
  
}

export const CampusMutation = {
  ...CreateCampus,
  ...DeleteCampus,
  ...UpdateCampus
}