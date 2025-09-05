export const createDate = (value?: string | number) => {
  const formattedDate = value 
    ? new Date(value).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0]
  
  return formattedDate
}