import { CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Bucket from '../components/Bucket'
import Layout from '../Layout'
import { getAllBucket } from '../redux/Bucket/Bucket.action'

function HomePage(){
  const buckets = useSelector((state) => state.bucket.buckets)
  const loading = useSelector((state) => state.bucket.loading)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllBucket())
  },[dispatch])
  if(loading)
    return(
      <div className='flex justify-center items-center py-4'>
                <CircularProgress />
      </div>
    )
  return (
    <div className='sm:ml-56 mt-5 p-3'>
        <h2 className='font-semibold text-2xl py-3'>All Buckets</h2>
        {!buckets && <p className="font-semibold text-center text-lg text-gray-500">No Buckets Found</p>}
        <div className='grid  gap-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
            {buckets?.length > 0 && buckets.map((bucket) =>(
              <Bucket img={bucket.img} title={bucket.title} key={bucket._id} id={bucket._id}/>
            ))}
        </div>
    </div>
  )
}

export default Layout(HomePage)