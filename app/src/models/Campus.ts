import type { CampusType } from '.'

export interface Campus {
  id: string
  created: string
  name: string
  CampusType: CampusType
  fk_campustype_id: string
}
