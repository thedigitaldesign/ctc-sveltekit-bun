export interface TimeEntry {
  id?: string
  created?: string
  description?: string
  start_time?: string
  end_time?: string
  activity?: object
  fk_activity_id?: string
}