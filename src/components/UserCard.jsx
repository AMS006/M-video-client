import React, { useState } from 'react'
import VideoModal from './VideoModal';
import {FiPlay} from 'react-icons/fi'
import { useDispatch } from 'react-redux';
import { addUserHistory } from '../redux/History/History.action';
import {MdDelete,MdEdit} from 'react-icons/md'
import { deleteCard } from '../redux/Card/Card.action';
import UpdateCardModal from './UpdateCardModal';
function UserCard({code,title,id}) {
    const [open,setOpen] = useState(false)
    const [open1,setOpen1] = useState(false)
    const [url,setUrl] = useState(`https://www.youtube.com/watch?v=${code}`)
    const [title1,setTitle] = useState(title)
    const dispatch = useDispatch()
    const handleOpen  = (e) =>{
        setOpen(true)
        dispatch(addUserHistory(id))
    }
    const handleDelete = () =>{
        let toDelete = window.confirm("Do You Want To Delete This Card")
        if(toDelete)
            dispatch(deleteCard(id))
    }

  return (
    <>
        <div className='border rounded shadow relative' >
            <VideoModal open={open} setOpen={setOpen} code={code} title={title}/>
            <UpdateCardModal open={open1} setOpen={setOpen1} url={url} id={id} setUrl={setUrl} title={title1} setTitle={setTitle}/>
                <div className='cursor-pointer relative ' onClick={handleOpen}>
                    <img src={`https://img.youtube.com/vi/${code}/hqdefault.jpg`} className='w-full' alt="" />
                    <span className='absolute bg-slate-400 text-3xl text-white rounded-full p-2' style={{right:'40%',top:'40%'}}><FiPlay /></span>
                    
                </div>
                <div className='absolute top-0 right-0 flex gap-1 text-white text-2xl'>
                        <span className='bg-red-600 p-1 rounded cursor-pointer' onClick={handleDelete}>
                            <MdDelete />
                        </span>
                        <span className='bg-green-500 p-1 rounded cursor-pointer' onClick={()=> setOpen1(true)}>
                            <MdEdit />
                        </span>
                    </div>
                <div>
                    <h2 className='font-semibold py-2 px-1'>{title}</h2>
                </div>
            </div>
    </>
  )
}

export default UserCard;