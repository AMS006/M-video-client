import { CircularProgress } from '@mui/material'
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import Layout from '../Layout'
import { getBucketById } from '../redux/Bucket/Bucket.action'
import { getAllCard } from '../redux/Card/Card.action'

function BucketsPage() {
  const dispatch = useDispatch()
  let {id} = useParams()

  const cards = useSelector((state) => state.card.card)
  const bucket = useSelector((state) => state.bucket?.bucket)
  const loading = useSelector((state) => state.card.loading)
  useEffect(()=>{
      dispatch(getAllCard(id))
      dispatch(getBucketById(id))
  },[id])
  if(loading)
    return(
      <div className='flex justify-center items-center py-4'>
                <CircularProgress />
            </div>
    )
  return (
    <div className='sm:ml-56 mt-2 p-2'>
        {bucket && <h1 className='font-semibold text-xl py-3'>{bucket.title}</h1>}
        {cards.length === 0 && <p className='text-center py-4 text-gray-500 font-semibold text-lg'>No Cards Added</p>}
            <div className='grid  gap-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                {cards.length >0 && cards.map((card) => (
                    <Card code={card.code} title={card.title} key={card._id} id={card._id}/>
                ))}
            </div>
    </div>
  )
}

export default Layout(BucketsPage)