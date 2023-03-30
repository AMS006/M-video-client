import axios from 'axios'
import { userRequest,userSuccess,userFail,userLogout } from './User.reducer';

export const login = (user) => async(dispatch) =>{
    try {
        dispatch(userRequest());
        const config = { headers: { "Content-Type": "application/json" } };
        const userData = await axios({
            method:"POST",
            url:"https://wandering-trench-coat-tick.cyclic.app/user/login",
            data: user,
            config
        })
        return dispatch(userSuccess(userData.data))
    }catch (error) {
        return dispatch(userFail(error.response.data.message));
    }
}
export const signUp = (user) => async(dispatch) =>{
    try {
        dispatch(userRequest());
        const config = { headers: { "Content-Type": "application/json" } };
        const userData = await axios({
            method:"POST",
            url:"https://wandering-trench-coat-tick.cyclic.app/user/register",
            data: user,
            config
        })
        return dispatch(userSuccess(userData.data))
    }catch (error) {
        return dispatch(userFail(error.response.data.message));
    }
    
}
export const logout = () => async(dispatch) =>{
    try {
        dispatch(userRequest());
        const config = { headers: { "Content-Type": "application/json" } };
        await axios({
            method:"GET",
            url:"https://wandering-trench-coat-tick.cyclic.app/user/logout",
            config
        })
        return dispatch(userLogout())
    }catch (error) {
        return dispatch(userFail(error.response.data.message));
    }
}
export const getUserDetails = () => async(dispatch) =>{
    try {
        dispatch(userRequest());
        const userData = await axios({
            method:"GET",
            url:"https://wandering-trench-coat-tick.cyclic.app/user/me",
        })
        return dispatch(userSuccess(userData.data))
    }catch (error) {
        return dispatch(userFail(error.response.data.message));
    }
}