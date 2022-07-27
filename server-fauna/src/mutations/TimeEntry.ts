import { TimeEntry } from '@prisma/client'
import { Context } from '../context'
import { TimeEntry as TimeEntryModel, Error } from '../models'
import { datetime } from '../../helpers'

interface Payload {
  error: Error[]
  TimeEntry: TimeEntry | null
}

const CreateTimeEntry = {
  createTimeEntry: async (_: any, { description, start_time, end_time, Activity, Counselor }: TimeEntryModel, { prisma }: Context): Promise<Payload> => {
    if (!description || !start_time || !end_time || !Activity || !Counselor) {
      return {
        error: [
          {
            id: '123',
            created: datetime.now,
            message: 'You must provide a `description`, `start_time`, `end_time`, `Activity`, and `Counselor` for TimeEntry'
          }
        ],
        TimeEntry: null
      }
    }

    // console.log(`start_time: ${start_time}`)
    // console.log(`end_time: ${end_time}`)
    // console.log(`formatter: ${datetime.formatter(start_time)}`)
    // console.log(`lengthOfTimeInMinutes: ${datetime.lengthOfTimeInMinutes(start_time, end_time)}`)

    const TimeEntry = await prisma.timeEntry.create({
      data: {
        created: datetime.now,
        description,
        start_time: datetime.formatter(start_time),
        end_time: datetime.formatter(end_time),
        length_of_time: datetime.lengthOfTimeInMinutes(start_time, end_time),
        fk_activity_id: Activity.id,
        fk_counselor_id: Counselor.id
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