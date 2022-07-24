import { Category } from './Category'

export interface Activity {
  id: string
  created: string
  type: string
  Category: Category
  fk_category_id: string
}
