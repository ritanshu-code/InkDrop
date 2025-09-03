import { useState, useEffect } from 'react'
import React from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="relative min-h-screen flex flex-col bg-[#111606] text-white">
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
    </div>
  ) : (
    <Home />
  )
}

export default App
