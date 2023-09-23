import { createSlice } from "@reduxjs/toolkit";
import RealEstateData from "@/data/data";

const initialState = {
  properties: RealEstateData
}

export const propertySlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {

  }
})