export const getErrorMessage = (field?: any): string | undefined => {
  return field?.message ? String(field.message) : undefined;
}