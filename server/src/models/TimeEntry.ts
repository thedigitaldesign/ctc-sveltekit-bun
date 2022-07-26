import { Activity, Counselor } from '.'

export interface TimeEntry {
  id: string
  created: string
  description: string
  start_time: string
  end_time: string
  length_of_time: number
  Activity: Activity
  Counselor: Counselor
  fk_activity_id: string
  fk_counselor_id: string
}
