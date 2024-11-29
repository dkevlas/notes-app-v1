import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Logout from '../OthersComponents/Logout'
import { ULComp } from './ULComp'

export const Navbar: React.FC = () => {
    const navigate = useNavigate()

    const goHome = () =>{
        navigate('/')
    }
    return (
        <>
        <nav className='bg-slate-900 fixed top-0 left-0 right-0 min-w-72 p-0 m-0 flex justify-between items-center py-2 px-4 z-50 font-bold text-sl'>
            <span onClick={goHome} className='text-slate-300 text-2xl cursor-pointer'>
                Notes
            </span>
            <ULComp />
            <span>
                <Logout />
            </span>
        </nav>
        <Outlet />
        </>
    )
}
