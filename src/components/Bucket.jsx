import React from 'react'
import { Link } from 'react-router-dom'
import {RiPlayList2Fill} from 'react-icons/ri'
function Bucket({img,title,id}) {
  return (
    <Link className='border shadow rounded-lg overflow-hidden' to={`/buckets/${id}`}>
        <div className='w-full relative'>
            <img src={img} alt={title}  className='sm:h-44 h-52 w-full'/>
            <span className='absolute top-4 right-1 text-white text-2xl'>
                <RiPlayList2Fill />
            </span>
        </div>
        <div>
            <h1 className='font-semibold py-2 px-1'>{title}</h1>
        </div>
    </Link>
  )
}

export default Bucket