import { configureStore } from '@reduxjs/toolkit'
import   productSlice  from './componant/slice/productSlice'

export const store = configureStore({
  reducer: {
    product:productSlice
  },
   
})