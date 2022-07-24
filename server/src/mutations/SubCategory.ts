import { SubCategory } from "@prisma/client"
import { Context } from "../context"
import { SubCategory as SubCategoryModel, Error } from "../models"

interface Payload {
  error: Error[],
  SubCategory: SubCategory | null
}

const CreateSubCategory = {
  createSubCategory: async (_: any, { name }: SubCategoryModel, {prisma}: Context): Promise<Payload> => {


    return {
      error: [],
      SubCategory: null
    }
  }
}

const DeleteSubCategory = {
  
}

const UpdateSubCategory = {
  
}

export const SubCategoryMutation = {
  ...CreateSubCategory,
  ...DeleteSubCategory,
  ...UpdateSubCategory
}