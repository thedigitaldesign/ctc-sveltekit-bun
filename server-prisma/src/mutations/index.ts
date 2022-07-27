import { ActivityMutation } from './Activity'
import { CampusMutation } from './Campus'
import { CampusTypeMutation } from './CampusType'
import { CategoryMutation } from './Category'
import { CounselorMutation } from './Counselor'
import { SubCategoryMutation } from './SubCategory'
import { TimeEntryMutation } from './TimeEntry'

export const Mutation = {
  ...ActivityMutation,
  ...CampusMutation,
  ...CampusTypeMutation,
  ...CategoryMutation,
  ...CounselorMutation,
  ...SubCategoryMutation,
  ...TimeEntryMutation
}
