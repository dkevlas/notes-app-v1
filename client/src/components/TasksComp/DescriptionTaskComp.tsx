import React from 'react'
import { NoteTaskProps } from '../../interfaces/tasks/NoteTaskProps'

export const DescriptionTaskComp: React.FC<NoteTaskProps> = ({
    value, disabled, styles, onchange, name, 
}) => {
    return (
        <>
            <textarea
                rows={8}
                className={`
                    ${styles}
                    ${disabled ? 
                        'bg-transparent text-slate-400 font-semibold' : 
                        'bg-slate-700 font-bold outline-none '}
                        py-2 sha px-4 sha resize-none text-sm
                        border-transparent outline-none
                    `}
                onChange={onchange}
                value={value}
                disabled={disabled}
                name={name}
            >
            </textarea>
        </>
    )
}
