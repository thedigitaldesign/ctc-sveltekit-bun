import type { Campus } from "."

export interface Counselor {
  id: string
  name: string
  email: string
  Campus: Campus
  fk_campus_id: string
}