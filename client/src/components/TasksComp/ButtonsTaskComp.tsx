import React from 'react'
import { ButtonTaskProps } from '../../interfaces/tasks/ButtonsTaskProps'

export const ButtonsTaskComp: React.FC<ButtonTaskProps> = ({
    action, styles, onclick
}) => {
    return (
        <button
            className={`
                ${styles}
                w-24 font-semibold rounded-md outline-slate-900 outline-2 outline-none active:scale-95
            `}
            onClick={onclick}
        >
            {action}
        </button>
    )
}
