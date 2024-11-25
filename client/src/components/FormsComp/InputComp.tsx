import React, { useEffect, useState } from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'
import { SpanMessageError } from './SpanMessageError'
import { ResponseData } from '../../context/AuthContext'

interface InputProps {
    styleInput?: string,
    styleLabel?: string,
    label: string,
    type: string,
    name: string,
    autocomplete?: string,
    register: UseFormRegister<any>,
    validate?: RegisterOptions<any, string>,
    errForm?: string | undefined,
    errRes?: ResponseData
}

export const InputComp: React.FC<InputProps> = ({
    styleLabel, styleInput, label, type, name, autocomplete, register, validate, errForm, errRes
}) => {
    const [ showError, setShowError ] = useState<ResponseData>({})

    useEffect(()=>{
        if(errRes?.origin === 'client'){
            setShowError({
                message: errRes.message,
                field: errRes.field
            })
        }
        if(errRes?.origin === 'server'){
            setShowError({
                message: errRes.message,
                field: errRes.field
            })
        }
        if(errRes?.origin){
            const finallyMessage = setTimeout(()=>{
                setShowError({})
            }, 5000)
            return () => clearTimeout(finallyMessage)
        }
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
