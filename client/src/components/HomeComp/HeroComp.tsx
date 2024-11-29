import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HeroComp: React.FC = () => {
    const navigate = useNavigate()
    const login = () =>{
        navigate('/cuenta/iniciar-sesion')
    }
    const register = () =>{
        navigate('/cuenta/registrarse')
    }
    return (
        <header className='flex flex-col gap-3 min-w-72 text-center py-8'>
            <h1 className='text-4xl font-bold text-slate-400 text-pretty'>Organiza tus notas fácilmente</h1>
            <p className='text-3xl font-semibold text-pretty text-slate-600'>Empieza a gestionar tus ideas y proyectos de manera eficiente.</p>
            <div className='flex flex-col gap-4 items-center sm:flex-row sm:justify-center'>
                <button onClick={register} className='bg-slate-400 active:scale-95 text-slate-900 w-44 px-4 py-1 font-bold rounded-lg hover:bg-transparent hover:outline hover:outline-2 hover:outline-slate-400 hover:text-slate-400'>Regístrate gratis</button>
                <button onClick={login} className='bg-slate-400 active:scale-95 text-slate-900 w-44 px-4 py-1 font-bold rounded-lg hover:bg-transparent hover:outline hover:outline-2 hover:outline-slate-400 hover:text-slate-400'>Iniciar sesión</button>
            </div>
        </header>
    )
}
