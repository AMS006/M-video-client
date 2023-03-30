import { CircularProgress } from '@mui/material'
import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AddCardModal from '../components/AddCardModal'
import UserCard from '../components/UserCard'
import Layout from '../Layout'
import { getBucketById } from '../redux/Bucket/Bucket.action'
import { getAllCard } from '../redux/Card/Card.action'

function MyBucketsPage() {
    const [open,setOpen] = useState(false)
    const dispatch = useDispatch()
    let {myId} = useParams()
    const cards = useSelector((state) => state.card.card)
    const bucket = useSelector((state) => state.bucket?.bucket)
    const loading = useSelector((state) => state.card.loading)
    useEffect(()=>{
        dispatch(getAllCard(myId))
        dispatch(getBucketById(myId))
    },[myId])
    if(loading)
        return(
            <div className='flex justify-center items-center py-4'>
            <CircularProgress />
        </div>
        )
  return (
    <>
        <AddCardModal open={open} setOpen={setOpen}/>
        <div className='sm:ml-56 md:mt-4 md:px-4 p-2'>
            <div className='flex justify-end'>
                <button onClick={()=> setOpen(true)} className='flex gap-1 items-center justify-center p-2 bg-slate-700 text-white rounded'>
                    <svg  viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"  color="white"><path fill="none" stroke="#fff" strokeWidth="2" d="M12,18 L12,6 M6,12 L18,12"></path></svg>
                    <span className='font-semibold'>Add New Card</span>
                </button>
            </div>
            {bucket && <h1 className='font-semibold text-xl py-3'>{bucket.title}</h1>}
            {cards?.length === 0 && <p className='text-center text-gray-500 font-semibold text-lg'>No Cards Added</p>}
            <div className='grid  gap-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                {cards?.length >0 && cards.map((card) => (
                    <UserCard code={card.code} key={card._id} title={card.title} id={card._id}/>
                ))}
            </div>
        </div>
    </>
  )
}
export default Layout(MyBucketsPage)