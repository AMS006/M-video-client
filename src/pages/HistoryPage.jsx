import { CircularProgress } from '@mui/material'
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HistoryCard from '../components/HistoryCard'
import { getAllUserHistory } from '../redux/History/History.action'

function HistoryPage() {
    const dispatch = useDispatch()
    const histories = useSelector((state) => state.history.userHistory)
    const loading = useSelector((state) => state.history.loading)
    useEffect(()=>{
        dispatch(getAllUserHistory())
    },[])
    if(loading)
        return(
            <div className='flex justify-center items-center py-4'>
                <CircularProgress />
            </div>
        )
  return (
    <div className='sm:ml-56 py-3 md:px-4 px-2'>
        <h1 className='font-semibold text-xl py-2'>History</h1>
        {histories.length === 0 && <p className='text-center font-semibold text-gray-500'>History is Empty</p>}
        <div className='flex flex-col gap-2 '>
            {histories.map((history) =>(
                <HistoryCard code={history.card.code} key={history._id} title={history.card.title} id={history._id} createdAt={history.createdAt}/>
            ))}
        </div>
    </div>
  )
}

export default HistoryPage