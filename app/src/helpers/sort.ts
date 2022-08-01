export const alphaDesc = (array: {}[], field: string) => {
  const sort = array.slice().sort((a, b) => {
    return (a[field] > b[field]) ? 1 : -1;
  })

  // console.log('Raw array: ', array)
  // console.log('Raw field: ', field)
  // console.log('sort: ', sort)
  return sort
}

export const alphaAsc = (array: {}[], field: string) => {
  const sort = array.slice().sort((a, b) => {
    return (a[field] < b[field]) ? 1 : -1;
  })

  return sort
}