import { createSlice,current } from "@reduxjs/toolkit";

const initialState = {
    userHistory : [],
    loading:"false",
    error:""
}
const deleteHistory = (id,history) =>{
    let histories = []
    console.log(history,id)
    histories = history.filter((history1) => history1._id !== id)
    console.log(histories)
    return histories
}
const historySlice = new createSlice({
    name:"history",
    initialState,
    reducers:{
        historyRequest:(state) =>{
            state.loading = true
        },
        historyAddSuccess:(state,action) =>{
            state.userHistory.push(action.payload.history)
            state.loading = false
        },
        historyGetSuccess:(state,action) =>{
            state.userHistory = action.payload.history
            state.loading = false
        },
        historyDeleteSuccess:(state,action) =>{
            let history = deleteHistory(action.payload,current(state.userHistory))
            state.userHistory = history
            state.loading = false
        },
        historyFail: (state,action) =>{
            state.loading = false
            state.error = action.payload.message
        }
    }
})

export const {historyRequest,historyAddSuccess,historyGetSuccess,historyDeleteSuccess,historyFail} = historySlice.actions

export default historySlice.reducer