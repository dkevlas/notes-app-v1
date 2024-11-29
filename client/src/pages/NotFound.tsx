import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NotFound: React.FC = () => {
    const navigate = useNavigate()
    const goHome = () =>{
        navigate('/')
    }
    return (
        <>
            <div className='w-max text-center mx-auto mt-20 sm:mt-24 md:mt-28 lg:mt-36'>
                <div className="flex flex-col gap-8 text-center">
                    <span className="text-6xl text-slate-300">ERROR<br />404</span>
                    <button
                        className='outline text-slate-300 font-semibold w-max m-auto outline-2 outline-slate-300 p-2 px-8'
                        onClick={goHome}>
                        Ir al inicio
                    </button>
                </div>
            </div>
        </>
    )
}
