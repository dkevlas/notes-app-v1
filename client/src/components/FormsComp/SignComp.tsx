import React from 'react'
import { Link } from 'react-router-dom'
import { SignProps } from '../../interfaces/auth/SignProps'

export const SignComp: React.FC<SignProps> = ({
    route, showText, textLink, onClick
}) => {
    return (
        <div className='flex justify-between items-center font-semibold text-slate-700 text-sm'>
            <span>
                {showText}
            </span>
            <Link
                className='
                    font-bold py-1 px-2 rounded-md text-slate-600 text-sm
                    hover:underline
                '
                to={route}
                onClick={onClick}
            >
                {textLink}

            </Link>
        </div>
    )
}
