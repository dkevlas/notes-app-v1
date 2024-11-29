import React from 'react'
import { WelcomeProps } from '../../interfaces/tasks/WelcomeProps'

export const WelcomeComp: React.FC<WelcomeProps> = ({
    user, styles
}) => {
    return (
        <>
            <div className='text-center my-5'>
                <h2 
                    className={
                        `${user? 'visible' : 'invisible'}
                        ${styles}
                        text-3xl font-semibold text-slate-400`
                    }
                >
                    ¡Bienvenido, <span className='font-bold text-slate-300'>{user}!</span>
                </h2>
                <p
                    className='text-2xl font-semibold text-slate-500'
                >
                    ¿Listo para crear y organizar tus notas?
                </p>
            </div>
        </>
    )
}
