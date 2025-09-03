import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import authService from '../appwrite/auth'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState('')

  const login = async (data) => {
    try {
      const session = await authService.login(data)
      if (session) {
        const userData = await authService.getCurrentUser()
        if (userData) dispatch(authLogin(userData));
        navigate("/")
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className=' h-screen w-full bg-transparent flex flex-col justify-center items-center'>
      <div className='card  w-1/4 h-1/2 p-10 text-white backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-lg'>
        <div>
          <span className=' flex justify-center text-5xl mb-7'>Login</span>
        </div>
        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(login)} className='flex flex-col '>
          <div className='flex flex-col '>
          <label htmlFor="Email" className='text-xl ' >Email</label>
          <input 
          type="email" 
          placeholder='Enter your email...' 
          className='w-full bg-transparent border-1 rounded-xl p-2 mt-2 mb-2 ' 
          {...register("email", {
            required: true,
            validate: {
              matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
              "Email address must be a valid address",
            }
          })}
          />
          <label htmlFor="Password" className='text-xl '>Password</label>
          <input 
          type="password" 
          placeholder='Enter your password...' 
          className='w-full bg-transparent border-1  rounded-xl p-2 mt-2 mb-2 '
          {...register("password", {
            required: true,
          })}
          />
          <button 
          type='submit'
          className='inline-bock px-6 py-2 text-zinc-300 hover:text-zinc-50 hover:border-blue-600 hover:bg-[#30332f]  transition duration-300 bg-transparent backdrop-blur-md border-2 border-blue-400 rounded-xl cursor-pointer mt-5'
          >Login</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login