import React from 'react'
import { MessageAuthProps } from '../../interfaces/auth/MessageAuthProps'

export const MessageAuth: React.FC<MessageAuthProps> = ({
    isLogin
}) => {

    return (
        <>
            <div className='text-center w-full mt-6 min-w-72'>
                <h3 className='text-slate-400 text-2xl font-semibold'>
                    {isLogin ? 'Empezar es fácil' : 'Accede a tu perfil'}
                </h3>
                <p className='text-slate-500 text-xl font-semibold'>
                    {isLogin ? 'Solo te llevará un momento registrarte.' :'Introduce tus datos para comenzar.'}
                </p>
            </div>
        </>
    )
}
