import { SubCategory } from '@prisma/client'
import { datetime } from '../../helpers'
import { Context } from '../context'
import { SubCategory as SubCategoryModel, Error } from '../models'

interface Payload {
  error: Error[]
  SubCategory: SubCategory | null
}

const CreateSubCategory = {
  createSubCategory: async (_: any, { name }: SubCategoryModel, { prisma }: Context): Promise<Payload> => {
    if (!name) {
      return {
        error: [
          {
            id: '123',
            created: datetime.now,
            message: 'You must enter a `name` for SubCategory'
          }
        ],
        SubCategory: null
      }
    }

    const SubCategory = await prisma.subCategory.create({
      data: {
        name
      }
    })

    return { error: [], SubCategory }
  }
}

const DeleteSubCategory = {}

const UpdateSubCategory = {}

export const SubCategoryMutation = {
  ...CreateSubCategory,
  ...DeleteSubCategory,
  ...UpdateSubCategory
}
