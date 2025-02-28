type CitiesPlaceApiType = {
  "place name": string
  "longitude": string
  "state": string
  "state abbreviation": string
  "latitude": string
}

export type CitiesApiType = {
  "post code": string,
  "country": string,
  "country abbreviation": string,
  "places": CitiesPlaceApiType[]
}

export const checkIfCitiesData = (value: any): value is CitiesApiType => {
  return value 
    && typeof value['post code'] === 'string'
    && typeof value['country'] === 'string'
    && typeof value['country abbreviation'] === 'string'
    && Array.isArray(value.places) && value.places.every(
      (item: CitiesPlaceApiType) => item 
        && typeof item['place name'] === 'string'
        && typeof item['longitude'] === 'string'
        && typeof item['latitude'] === 'string'
        && typeof item['state'] === 'string'
        && typeof item['state abbreviation'] === 'string'
    )
}

export type CitiesPlaceType = {
  placeName: string
  longitude: string
  state: string
  stateAbbreviation: string
  latitude: string
}

export type CitiesType = {
  zipCode: string,
  country: string,
  countryAbbreviation: string,
  places: CitiesPlaceType[]
}