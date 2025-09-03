import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo, Logoutbtn } from '../index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Post",
      slug: "/all-post",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
    // {
    //     name: "Edit Post",
    //     slug: `/post/${Post.$id}`,
    //     active: authStatus,
    // },
  ]

  // flex flex-row justify-between  items-center     bg-transparent font-bold text-[#ccc3c3] shadow-md  container mx-auto
  return (
    <nav className='fixed z-50 w-full'>

      <div
        style={{ fontFamily: "'Mogra', Helvetica" }} className='header flex flex-row  justify-between items-center mt-4 lg:px-0 px-5 container mx-auto bg-transparent text-white/90 text-xl font-medium'>
        <div className='topLeft flex justify-start pl-6'>
          <Link>
            <Logo width="75px" />
          </Link>
        </div>
        <div className='center '>
          <ul className='flex ml-auto gap-8'>
            {/* {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 hover:border-emerald-700 hover:bg-[#30332f] hover:text-white transition duration-300 bg-transparent backdrop-blur-md hover:border-2  rounded-full'
                >{item.name}</button>
              </li>
            ) : null
          )} */}
            {navItems.map((item) => {
              const isActive = location.pathname === item.slug;

              return item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className={`inline-block px-6 py-2 rounded-full transition duration-300 bg-transparent backdrop-blur-md text-[#b1dd40]
          ${isActive ? ' text-zinc-300 ' : 'bg-transparent  hover:underline'}
        `}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null;
            })}

            {authStatus && (
              <li>
                <Logoutbtn />
              </li>
            )}
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Header