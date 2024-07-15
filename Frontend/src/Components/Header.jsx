import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Img } from '@chakra-ui/react';

function Header() {

  const {currentUser} = useSelector((state)=>state.user);

  return (
    <div  className='bg-slate-200'>
      <div className='flex justify-between items-center max-w-xl mx-auto p-3'>
        <Link to={'/'}>
        
        <h1 className="font-bold">REDUX-CRUD-APP</h1>
        </Link>
        <ul className='flex gap-4'>
           <Link to={'/'}> <li >Home</li></Link>
            <Link to={'about'}><li >About</li></Link>
            <Link to={'/profile'}>
            {currentUser ?
             <img src={currentUser.profilepicture} alt='profile-pic' className='h-7 w-7 rounded-full object-cover'  />
             : "Sign in" }</Link>
        </ul>
      </div>
    </div>
  )
}

export default Header
