import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'

// dayjs.extend(utc)
dayjs.extend(timezone)

const now = dayjs().format()
const dateOnly = dayjs().format('YYYY-MM-DD')
const timeOnly = dayjs().format('hh:mm:ss A')
const guess =   dayjs.tz.guess()

const lengthOfTimeInMinutes = (start_time: string, end_time: string) => {
  const st = dayjs(start_time)
  const et = dayjs(end_time)
  const minutes = et.diff(st, 'minutes')

  return minutes
}

const formatter = (date: string) => {
  return dayjs(date, guess).format()
}

export const datetime = {
  now,
  dateOnly,
  timeOnly,
  lengthOfTimeInMinutes,
  formatter,
  guess
}