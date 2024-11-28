import React from 'react'
import { NoteTaskProps } from '../../interfaces/tasks/NoteTaskProps'

export const TitleTaskComp: React.FC<NoteTaskProps> = ({
    disabled, value, onchange, name
}) => {

    return (
        <>
            <input 
            name={name}
            className={`
                ${disabled ? 
                'bg-transparent text-slate-400 font-semibold outline-slate-700' : 
                'bg-slate-700 font-bold '}
                py-2 px-4 text-lg border-slate-900 border-solid border-b-4 outline-none
            `}
            type="text"
            disabled={disabled} 
            onChange={onchange} 
            value={value}
            />
        </>
    )
}
