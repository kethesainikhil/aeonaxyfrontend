import { configureStore } from '@reduxjs/toolkit'
import AddUserSlice from './src/features/AddUserSlice'
export default configureStore({
  reducer: {
    user : AddUserSlice ,
  },
})