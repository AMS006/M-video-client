import axios from 'axios'
import { historyAddSuccess, historyDeleteSuccess, historyFail, historyGetSuccess, historyRequest } from './History.reducer'

export const addUserHistory = (id) => async(dispatch) =>{
    try {
        dispatch(historyRequest)
        const history = await axios({
            method:"POST",
            url:"https://wandering-trench-coat-tick.cyclic.app/history",
            data: {id}
        })
        dispatch(historyAddSuccess(history.data))
    } catch (error) {
        dispatch(historyFail(error))
    }
}
export const getAllUserHistory = () => async(dispatch) =>{
    try {
        const history = await axios({
            method:"GET",
            url:"https://wandering-trench-coat-tick.cyclic.app/history"
        })
        dispatch(historyGetSuccess(history.data))
    } catch (error) {
        dispatch(historyFail(error))
    }
}
export const deleteHistory = (id) => async(dispatch) =>{
    try {
        dispatch(historyRequest())
        await axios({
            method:"DELETE",
            url:`https://wandering-trench-coat-tick.cyclic.app/history/${id}`
        })
        dispatch(historyDeleteSuccess(id))
    } catch (error) {
        
    }
}