import { Campus } from "./Campus"

export interface Counselor {
  id: string
  name: string
  email: string
  Campus: Campus
  fk_campus_id: string
}