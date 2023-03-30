import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user:undefined,
    loading:false,
    error:""
}
const userSlice = createSlice({
    name:"User",
    initialState,
    reducers:{
        userRequest:(state) =>{
            state.loading = true
            state.error = ""
        },
        userSuccess:(state,action) =>{
            state.loading = false
            state.user = action.payload.user
        },
        userLogout:(state) =>{
            state.loading = false
            state.user = undefined
        },
        userFail:(state,action) =>{
            state.loading = false
            console.log(action.payload)
            state.error = action.payload
        }
    }
})
export const {userRequest,userSuccess,userFail,userLogout} = userSlice.actions

export default userSlice.reducer