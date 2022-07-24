import { Query } from './Query'

import { ActivityResolver } from './Activity'
import { CampusResolver } from './Campus'
import { CampusTypeResolver } from './CampusType'
import { CategoryResolver } from './Category'
import { CounselorResolver } from './Counselor'
import { SubCategoryResolver } from './SubCategory'
import { TimeEntryResolver } from './TimeEntry'

export const Resolvers = {
  ...Query,
  ...ActivityResolver,
  ...CampusResolver,
  ...CampusTypeResolver,
  ...CategoryResolver,
  ...CounselorResolver,
  ...SubCategoryResolver,
  ...TimeEntryResolver
}
