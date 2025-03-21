export const getErrorMessage = (error: unknown): string | undefined => {
  if (!error) return undefined
  if (typeof error === 'object' && 'message' in error) {
    return (error as { message?: string }).message
  }
  return undefined
}