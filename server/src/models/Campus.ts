import { CampusType } from './CampusType'

export interface Campus {
  id: string
  created: string
  name: string
  CampusType: CampusType
  fk_campustype_id: string
}
