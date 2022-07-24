import { Activity } from './Activity'

export interface TimeEntry {
  id: string
  created: string
  description: string
  start_time: string
  end_time: string
  length_of_time: number
  Activity: Activity
  fk_activity_id: string
}
