import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const  Layout = (Component) => {
  return function Layout(props){
    const [open,setOpen] = useState(false)
    return (
      <div>
          <Navbar open={open} setOpen={setOpen}/>
          <Sidebar open={open} setOpen={setOpen}/>
          <Component {...props} />
      </div>
    )
  }
}

export default Layout