import axios from 'axios'
import { addCardSuccess, cardDeleteSuccess, cardFail, cardRequest, cardSuccess, updateCardSuccess } from './Card.reducer';

export const createCard = (card)=> async(dispatch) =>{
    try {
        dispatch(cardRequest())
        const cardData = await axios({
            method:"POST",
            url:"https://github.com/AMS006/M-video-client.git/card/create",
            data: card
        })
        return dispatch(addCardSuccess(cardData.data))
    } catch (error) {
        return dispatch(cardFail(error.response.data.message));
    }
}
export const deleteCard = (id) => async(dispatch) =>{
    try {
        dispatch(cardRequest())
        await axios({
            method:"DELETE",
            url:`https://github.com/AMS006/M-video-client.git/card/${id}`
        })
        dispatch(cardDeleteSuccess(id))
    } catch (error) {
        return dispatch(cardFail(error.response.data.message));
    }
}
export const updateCard = ({id,title,code,bucket1,myId}) => async(dispatch) =>{
    try {
        dispatch(cardRequest())
        const cardData = await axios({
            method:"PUT",
            url:`https://github.com/AMS006/M-video-client.git/card/${id}`,
            data: {title,code,bucket1}
        })
        dispatch(updateCardSuccess(cardData.data))
        
    } catch (error) {
        return dispatch(cardFail(error.response.data.message));
    }
}
export const getAllCard = (id)=> async(dispatch) =>{
    try {
        dispatch(cardRequest())
        const cardData = await axios({
            method:"GET",
            url:`https://github.com/AMS006/M-video-client.git/card/${id}`
        })
        return dispatch(cardSuccess(cardData.data))
    } catch (error) {
        return dispatch(cardFail(error.response.data.message));
    }
}
export const handleChange = (id) => (dispatch) =>{
    try {
        dispatch(cardDeleteSuccess(id))
    } catch (error) {
        return dispatch(cardFail(error.response.data.message));
    }
}