import { TimeEntry } from '@prisma/client'
import { Context } from '../context'
import { TimeEntry as TimeEntryModel, Error } from '../models'
import { datetime } from '../../helpers'

interface Payload {
  error: Error[]
  TimeEntry: TimeEntry | null
}

const CreateTimeEntry = {
  createTimeEntry: async (_: any, { description, start_time, end_time, Activity }: TimeEntryModel, { prisma }: Context): Promise<Payload> => {
    if (!description || !start_time || !end_time || !Activity) {
      return {
        error: [
          {
            id: '123',
            created: datetime.now,
            message: 'You must provide a `description`, `start_time`, `end_time`, and `Activity` for TimeEntry'
          }
        ],
        TimeEntry: null
      }
    }

    const TimeEntry = await prisma.timeEntry.create({
      data: {
        description,
        start_time,
        end_time,
        length_of_time: datetime.lengthOfTimeInMinutes(start_time, end_time),
        fk_activity_id: Activity.id,
        this_month: false,
        this_week: false,
        today: false
      }
    })

    return { error: [], TimeEntry }
  }
}

const DeleteTimeEntry = {
  
}

const UpdateTimeEntry = {
  
}

export const TimeEntryMutation = {
  ...CreateTimeEntry,
  ...DeleteTimeEntry,
  ...UpdateTimeEntry
}