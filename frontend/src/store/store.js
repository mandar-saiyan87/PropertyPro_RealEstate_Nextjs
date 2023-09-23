import { configureStore } from "@reduxjs/toolkit";
import { propertySlice } from "./PropertySlice";

export const store = configureStore({
  reducer: {
    properties: propertySlice.reducer
  }
})