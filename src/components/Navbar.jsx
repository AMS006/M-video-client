import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProfileAvatar from './ProfileAvatar'
import {GiHamburgerMenu} from 'react-icons/gi'
function Navbar({open,setOpen}) {

  const user = useSelector((state) => state.user)
  const navigate = useNavigate()
  useEffect(()=>{
    if(user && user?.user?.name){

    }else
      navigate('/signin')
  },[user])
  return (
    <>
      {user && user?.user?.name && <div className='flex justify-between md:px-12 px-4 items-center shadow-lg'>
          <div className='w-40'>
              <svg className='w-full' id="DfZPKrAvG" viewBox="0 0 389.89473684210526 72.15017786381027" height="72.15017786381027" width="389.89473684210526" ><defs id="SvgjsDefs1011"></defs><g id="SvgjsG1012" featurekey="2ou6gm-0" transform="matrix(0.11232349165596918,0,0,0.11232349165596918,20,20.032076878480336)" fill="#111111"><defs xmlns="http://www.w3.org/2000/svg"></defs><g xmlns="http://www.w3.org/2000/svg"><path className="fil0" d="M0 333c0,0 106,-65 145,-80 39,-15 62,-23 100,-52 39,-30 88,-91 105,-104 17,-12 17,-8 49,-19 40,-14 95,-98 116,-74 12,15 44,107 58,69 6,-16 19,-42 32,-32 14,11 11,9 25,60 14,51 20,48 38,66 19,17 5,9 25,49 21,40 62,85 77,109 10,18 18,32 21,37 -44,-14 -127,-38 -223,-54 -9,-17 -10,-45 -12,-55 -8,-40 -60,-28 -42,-61 6,-13 89,-89 61,-85 -17,3 -47,9 -53,12 -85,36 20,-84 -66,-47 -8,4 -31,0 -45,15 -13,15 -31,-3 -47,15 -16,18 -6,26 -32,47 -25,21 -24,22 -46,37 -21,15 -24,36 -43,43 -18,7 -53,24 -65,24 -13,0 -63,30 -69,36 -5,7 -109,44 -109,44z" style={{fill:'#111111'}}></path><path className="fil0" d="M35 356c0,0 212,-57 406,-43 193,14 379,81 379,81l-72 19c-156,-59 -317,-77 -317,-77 0,0 154,49 243,97l-121 31c0,0 -125,-75 -209,-99 -83,-24 -309,-9 -309,-9z" style={{fill:'#111111'}}></path></g></g><g id="SvgjsG1013" featurekey="kZnDdN-0" transform="matrix(3.4459480152531237,0,0,3.4459480152531237,127.8648605742246,1.0135008542694592)" fill="#111111"><path d="M2.86 18.44 l6.66 0 l0 1.56 l-7.06 0 l-1.26 0 l0 -14 l1.66 0 l6.48 0 l0 1.56 l-6.48 0 l0 4.64 l5.04 0 l0 1.52 l-5.04 0 l0 4.72 z M17.52 13.74 l0 1.34 l-6.2 0 l0 -1.34 l6.2 0 z M30.94 6 l1.76 0 l-6.26 14 l-1.38 0 l-6.24 -14 l1.76 0 l5.18 11.82 z M35.96 6 l0 14 l-1.66 0 l0 -14 l1.66 0 z M42.52 6 c4.08 0 7.08 3.1 7.08 7 s-3 7 -7.08 7 l-4.16 0 l0 -14 l4.16 0 z M42.5 18.42 c3.34 0 5.4 -2.42 5.4 -5.42 s-2.06 -5.42 -5.4 -5.42 l-2.48 0 l0 10.84 l2.48 0 z M53.260000000000005 18.44 l6.66 0 l0 1.56 l-7.06 0 l-1.26 0 l0 -14 l1.66 0 l6.48 0 l0 1.56 l-6.48 0 l0 4.64 l5.04 0 l0 1.52 l-5.04 0 l0 4.72 z M68.88000000000001 5.800000000000001 c3.64 0 7.16 2.96 7.16 7.2 s-3.52 7.2 -7.16 7.2 c-3.66 0 -7.16 -2.96 -7.16 -7.2 s3.5 -7.2 7.16 -7.2 z M68.88000000000001 18.62 c2.74 0 5.44 -2.32 5.44 -5.62 s-2.7 -5.62 -5.44 -5.62 c-2.76 0 -5.44 2.32 -5.44 5.62 s2.68 5.62 5.44 5.62 z"></path></g></svg>
          </div>
          <div className='flex items-center gap-1'>
            <ProfileAvatar name={user.user.name} />
            <div className='text-2xl sm:hidden cursor-pointer' onClick={()=> setOpen(!open)}>
              <GiHamburgerMenu />
            </div>
          </div>
      </div>}
    </>
  )
}

export default Navbar