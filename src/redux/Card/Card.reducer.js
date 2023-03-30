import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    card:[],
    loading: false,
    error:""
}
const deleteCard = (id,card) =>{
    let cards = []

    cards = card.filter((card) => card._id !== id)

    return cards
}
const updateCard = (updatedCard,cards) =>{
    let card1 = []
    card1 = cards.map((card) => {
        if(card._id === updatedCard._id){
            return updatedCard
        }else
            return card
        })
    return card1
}
const cardSlice = new createSlice({
    name:"Card",
    initialState,
    reducers:{
        cardRequest:(state) =>{
            state.loading = false
        },
        cardSuccess:(state,action) =>{
            state.loading = false
            state.card = action.payload.cards
        },
        addCardSuccess:(state,action) =>{
            state.loading = false
            state.card.push(action.payload.card)
        },
        updateCardSuccess:(state,action) =>{
            state.loading = false
            let card = updateCard(action.payload.card,current(state.card))
            state.card = card
        },
        cardDeleteSuccess:(state,action) =>{
            let card = deleteCard(action.payload,current(state.card))
            state.card = card
            state.loading = false

        },
        cardFail:(state,action) =>{
            state.loading = false
            state.error = action.payload.message
        }
    }
})
export const {cardRequest,cardSuccess,cardFail,addCardSuccess,updateCardSuccess,cardDeleteSuccess} = cardSlice.actions

export default cardSlice.reducer