import React from 'react'

export const NoNotesMessage: React.FC = () => {
    return (
        <div
            className='text-slate-400 text-xl text-pretty px-4 text-center m-auto mt-8'
        >
            "No tienes notas disponibles. ¡Es el momento de crear una!"
        </div>
    )
}
