import { createSlice } from "@reduxjs/toolkit";
import RealEstateData from "@/data/data";

const initialState = {
  properties: RealEstateData,
  //Filter options
  locationFilter: 'Location (All)',
  propertyTypeFilter: 'Property (All)',
  priceRangeFilter: 'Price Range (All)',
}


export const propertySlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    setLocationFilter: (state, action) => {
      state.locationFilter = action.payload
    },
    setPropertyTypeFilter: (state, action) => {
      state.propertyTypeFilter = action.payload
    },
    setPriceFilter: (state, action) => {
      state.priceRangeFilter = action.payload
    },
    // To update property listing according to filtered values
    updateFilteredProperties: (state) => {
      const filteredProperties = RealEstateData.filter((property) => {
        const filterbyLocation = state.locationFilter === 'Location (All)' || property.city === state.locationFilter
        const filterbyPropertyType = state.propertyTypeFilter === 'Property (All)' || property.property_type === state.propertyTypeFilter

        const price = property.amount
        const filterbyPriceRange = state.priceRangeFilter === 'Price Range (All)' ||
          (state.priceRangeFilter === '$1000 - $3000' && price >= 1000 && price <= 3000) ||
          (state.priceRangeFilter === '$3001 - $5000' && price >= 3001 && price <= 5000) ||
          (state.priceRangeFilter === 'Over $5000' && price > 5000)
        return filterbyLocation && filterbyPropertyType && filterbyPriceRange
      })
      state.properties = filteredProperties
      // console.log(state.properties)
    }
  }

})




