import React, { useEffect, useState } from 'react'
import { SpanMessageError } from '../OthersComponents/SpanMessageError'
import { TextareaProps } from '../../interfaces/tasks/TextareaProps'
import { ResponseData } from '../../interfaces/context/ResponseData'
import { HandlerMessageErrors } from '../../utils/HandlerMessageErrors'

export const TextareaComp: React.FC<TextareaProps> = ({
    label, name, register, errForm, validate, styles, resError
}) => {
    const [ showError, setShowError ] = useState<ResponseData>({})
    useEffect(()=>{
        HandlerMessageErrors(resError, setShowError)
    }, [resError])
    
    return (
        <div className='p-1 flex flex-col gap-1'>
            <label 
                className={`
                    text-base text-slate-400 font-semibold    
                `}
                htmlFor={name}>
                {label}:
            </label>
            <textarea
                id={name}
                rows={7}
                {...register(name, validate)}
                className={`
                    ${styles} 
                    w-full bg-slate-500 font-semibold border-none rounded-md resize-none py-1 px-2 pb-4  outline-2 outline-slate-400
                `}
            >
            </textarea>
            <div className='visible'>
                {(errForm || showError.field === name) && <SpanMessageError  errClient={errForm} errServer={resError.message} />}
            </div>
        </div>
    )
}
