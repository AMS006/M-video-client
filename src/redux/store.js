import { configureStore } from "@reduxjs/toolkit";
import userSlice from './User/User.reducer'
import cardSlice from './Card/Card.reducer'
import bucketSlice from './Bucket/Bucket.reducer'
import historySlice from './History/History.reducer'
export const store = configureStore({
    reducer:{
        user:userSlice,
        card:cardSlice,
        bucket:bucketSlice,
        history:historySlice
    }
})