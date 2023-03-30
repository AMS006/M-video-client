import React from 'react'
import { Link, useParams } from 'react-router-dom'
function Sidebar({open,setOpen}) {
    const params = useParams()
    let tab = params.tab
    let myId = params?.myId
    if(!tab)
        tab = 'home'
    if(myId)
        tab = 'mybuckets'
  return (
    <div className={`fixed left-0 bg-slate-100 transition-all duration-100 ease-linear gap-6 font-semibold h-full px-12 py-4 text-center flex flex-col sm:translate-x-0 ${open?'translate-x-0 bg-white z-10':'-translate-x-full'}`}>
        <div className={`${tab==='home'?'bg-slate-700 w-28 text-white rounded-full  py-1':''}`} onClick={()=> setOpen(false)}>
            <Link to={'/'}>Home</Link>
        </div>
        <div className={`${tab==='mybuckets'?'bg-slate-700 w-28 text-white rounded-full  py-1':''}`} onClick={()=> setOpen(false)}>
            <Link to={'/mybuckets'}>My Buckets</Link>
        </div>
        <div className={`${tab==='history'?'bg-slate-700 w-28 text-white rounded-full  py-1':''}`} onClick={()=> setOpen(false)}>
            <Link to={'/history'}>History</Link>
        </div>
    </div>
  )
}

export default Sidebar