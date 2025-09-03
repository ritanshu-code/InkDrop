import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'

function Logoutbtn() {
    const dispatch = useDispatch()

    const logoutHandler=()=>{
        authService.logout().then((()=>{
            dispatch(logout())
        }))
    }
  return (
    <button 
    className='inline-bock px-6 py-2 text-[#b1dd40] hover:text-zinc-50 hover:border-red-600 hover:bg-[#30332f]  transition duration-300 bg-transparent backdrop-blur-md  rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default Logoutbtn