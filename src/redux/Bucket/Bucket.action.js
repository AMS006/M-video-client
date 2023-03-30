import axios from 'axios'
import { bucketFail, bucketRequest, bucketSuccess,bucketAddSuccess, bucketGetUserSuccess, bucketGetByIdSuccess, bucketDeleteSuccess } from './Bucket.reducer'

export const createBucket = (bucket)=> async(dispatch) =>{
    try {
        dispatch(bucketRequest())
        const bucketData = await axios({
            method:"POST",
            url:"https://github.com/AMS006/M-video-client.git/bucket/create",
            data: bucket
        })
        return dispatch(bucketAddSuccess(bucketData.data))
    } catch (error) {
        return dispatch(bucketFail(error.response.data.message));
    }
}
export const getAllBucket = ()=> async(dispatch) =>{
    try {
        dispatch(bucketRequest())
        const bucketData = await axios({
            method:"GET",
            url:"https://github.com/AMS006/M-video-client.git/bucket",
        })
        return dispatch(bucketSuccess(bucketData.data))
    } catch (error) {
        return dispatch(bucketFail(error.response.data.message));
    }
}
export const getUserBucket = () => async(dispatch) =>{
    try {
        dispatch(bucketRequest())
        const userBucket = await axios({
            method:"GET",
            url:"https://github.com/AMS006/M-video-client.git/bucket/user"
        })
        dispatch(bucketGetUserSuccess(userBucket.data))
    } catch (error) {
        return dispatch(bucketFail(error.response.data.message));
    }
}
export const getBucketById = (id) => async(dispatch) =>{
    try {
        const bucketData = await axios({
            method:"GET",
            url:`https://github.com/AMS006/M-video-client.git/bucket/user/${id}`
        })
        dispatch(bucketGetByIdSuccess(bucketData.data));
    } catch (error) {
        return dispatch(bucketFail(error.response.data.message));
    }
}
