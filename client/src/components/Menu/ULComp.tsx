import React from 'react'
import { Link } from 'react-router-dom'
export const ULComp: React.FC = () => {
    return (
        <ul className='gap-4 hidden sm:flex sm:justify-center'>
            <li>
                <Link
                    className='text-slate-500 font-semibold'
                    to='/'
                >
                    Inicio
                </Link>
            </li>
            <li>
                <Link
                    className='text-slate-500 font-semibold'
                    to='/perfil'
                >
                    Perfil
                </Link>
            </li>
        </ul>
    )
}
