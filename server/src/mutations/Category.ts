import { Category } from '@prisma/client'
import { Context } from '../context'
import { Category as CategoryModel, Error } from '../models'
import { datetime } from '../../helpers'

interface Payload {
  error: Error[]
  Category: Category | null
}

const CreateCategory = {
  createCategory: async (_: any, { name, SubCategory }: CategoryModel, { prisma }: Context): Promise<Payload> => {
    if (!name) {
      return {
        error: [
          {
            id: '123',
            created: datetime.now,
            message: 'You must provide a `name` for Category'
          }
        ],
        Category: null
      }
    }

    const Category = await prisma.category.create({
      data: {
        name,
        fk_subcategory_id: SubCategory?.id
      }
    })

    return { error: [], Category }
  }
}

const DeleteCategory = {}

const UpdateCategory = {}

export const CategoryMutation = {
  ...CreateCategory,
  ...DeleteCategory,
  ...UpdateCategory
}
