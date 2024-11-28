import React, { useEffect, useState } from 'react'
import { SpanMessageError } from './SpanMessageError'
import { InputProps } from '../../interfaces/auth/InputProps'
import { ResponseData } from '../../interfaces/context/ResponseData'
import { HandlerMessageErrors } from '../../utils/HandlerMessageErrors'

export const InputComp: React.FC<InputProps> = ({
    styleLabel, styleInput, label, type, name, autocomplete, register, validate, errForm, errRes
}) => {
    const [ showError, setShowError ] = useState<ResponseData>({})
    useEffect(()=>{
        HandlerMessageErrors(errRes, setShowError)
    }, [errRes])
    
    return (
        <>
            <div className='flex flex-col gap-1 p-1 pb-4'>
                <label 
                    className={`${styleLabel} text-base text-slate-400 font-semibold`}
                    htmlFor={name}>
                    {label}:
                </label>
                <input
                    className={`${styleInput} text-base text-slate-700 font-bold py-1 px-2 rounded-md border-none outline-2 outline-slate-400`}
                    type={type}
                    autoComplete={autocomplete}
                    id={name}
                    {...register(name, validate)}
                />
                <div className='visible'>
                    {(errForm || ( showError.field === name )) && 
                        (<SpanMessageError errClient={errForm} errServer={showError.message} />
                    )}
                </div>
            </div>
        </>
    )
}
