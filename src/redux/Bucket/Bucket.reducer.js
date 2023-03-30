import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userBucket:[],
    buckets:[],
    bucket:undefined,
    loading:false,
    error:""
}
const deleteBucket = (id,userBucket) =>{

}
const bucketSlice = new createSlice({
    name:"Bucket",
    initialState,
    reducers:{
        bucketRequest:(state) =>{
            state.loading = true
        },
        bucketAddSuccess:(state,action) =>{
            state.loading = false
            state.userBucket.push(action.payload.bucket)
        },
        bucketSuccess:(state,action) =>{
            state.buckets = action.payload.buckets
            state.loading = false
        },
        bucketGetByIdSuccess:(state,action) =>{
            state.bucket = action.payload.bucket
            state.loading = false
        },
        bucketUserAddSuccess:(state,action) =>{
            state.userBucket.push(action.payload.bucket)
            state.loading = false
        },
        bucketGetUserSuccess:(state,action) =>{
            state.userBucket = action.payload.userBuckets
            state.loading = false
        },
        bucketFail:(state,action) =>{
            state.loading = false
            state.error = action.payload.message
        }
    }
})
export const {bucketRequest,bucketSuccess,bucketAddSuccess,bucketGetByIdSuccess,bucketGetUserSuccess,bucketUserAddSuccess,bucketFail} = bucketSlice.actions

export default bucketSlice.reducer