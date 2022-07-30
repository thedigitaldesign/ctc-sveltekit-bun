import type { SubCategory } from '.'

export interface Category {
  id: string
  created: string
  name: string
  SubCategory?: SubCategory
  fk_subcategory_id?: string
}
