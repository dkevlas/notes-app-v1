import React from 'react'
import { SubmitProps } from '../../interfaces/auth/SubmitProps'

export const SubmitComp: React.FC<SubmitProps> = ({
    disabled, action
}) => {

    const clickForce = () => {
        console.log('HOLA')
    }
    return (
        <div
            className='text-end mt-4 w-max ml-auto rounded-md relative'>
            <span 
                onClick={clickForce}
                className={
                    `
                    ${disabled ? 'pointer-events-none': ''}
                    absolute bg-transparent z-0 w-full h-full rounded-md
                    `}
            >
            </span>
            <button 
                className={
                    `
                    ${!disabled ? 'bg-slate-700 -z-10' : 'bg-slate-400 z-10 active:scale-95'}
                    py-1 px-3 font-semibold rounded-md
                    `
                }
                disabled={!disabled}>
                
                {action}
            </button>
        </div>
    )
}
