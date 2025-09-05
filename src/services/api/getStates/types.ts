export type StateType = {
  name: string
  state_code: string
}

export type StatesApiType = {
  name: string
  iso2: string
  iso3: string
  states: StateType[]
}

export const checkIfStatesData = (value: any): value is StatesApiType => {
  return value
    && value.name && typeof value.name === 'string'
    && value.iso2 && typeof value.iso2 === 'string'
    && value.iso3 && typeof value.iso3 === 'string'
    && Array.isArray(value.states) && value.states.every(
      (item: StateType) => item
        && item.name && typeof item.name === 'string'
        && item.state_code && typeof item.state_code === 'string'
    )
}