import React from 'react'
import { NoteFormProps } from '../../interfaces/tasks/NoteFormProps'

export const NoteForm: React.FC<NoteFormProps> = ({
    children, styles, onsubmit
}) => {

    return (
        <form
            onSubmit={onsubmit}
            className={`
                ${styles}
                transition-opacity
                flex flex-col p-4 gap-2
            `}
        >
            {children}
        </form>
    )
}
