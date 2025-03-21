import { CitiesApiType } from "../types"

export const formatCitiesData = (data: CitiesApiType) => {
  const cities = data["places"].map((city) => ({
    placeName: city["place name"],
    longitude: city["longitude"],
    state: city["state"],
    stateAbbreviation: city["state abbreviation"],
    latitude: city["latitude"]
  }))
  
  return {
    zipCode: data["post code"],
    country: data["country"],
    countryAbbreviation: data["country abbreviation"],
    places: cities
  } 
}