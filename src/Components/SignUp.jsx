import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { login } from '../store/authSlice'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import Input from './Input'
import Button from './Button'

function SignUp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState("")
  const { register, handleSubmit } = useForm()

  const signUp = async (data) => {
    console.log("Form data submitted:", data);
    setError("")
    try {
      const account = await authService.createAccount(data)
      console.log(account)
      if (account) {
        const userData = await authService.getCurrentUser()
        if (userData) dispatch(login(userData));
        navigate("/")
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className=' h-screen w-full bg-transparent flex flex-col justify-center items-center'>
      <div className='card  w-1/4 h-2/3  p-10 text-white backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-lg'>
        <div>
          <span className=' flex justify-center text-5xl mb-7'>Sign up</span>
        </div>
        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(signUp)} className='flex flex-col '>
          <div className='flex flex-col gap-2'>
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                }
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="inline-bock px-6 py-2 text-zinc-300 hover:text-zinc-50 hover:border-blue-600 hover:bg-[#30332f]  transition duration-300 bg-transparent backdrop-blur-md border-2 border-blue-400 rounded-xl cursor-pointer mt-5">
              Create Account
            </Button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default SignUp