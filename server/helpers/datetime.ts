import dayjs from 'dayjs'

const now = dayjs().format()
const dateOnly = dayjs().format('YYYY-MM-DD')
const timeOnly = dayjs().format('hh:mm:ss A')

const lengthOfTimeInMinutes = (start_time: string, end_time: string) => {
  const st = dayjs(`2000-01-01 ${start_time}`)
  const et = dayjs(`2000-01-01 ${end_time}`)
  const minutes = et.diff(st, 'minutes')

  return minutes
}

export const datetime = {
  now,
  dateOnly,
  timeOnly,
  lengthOfTimeInMinutes
}