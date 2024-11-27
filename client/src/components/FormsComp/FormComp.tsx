import React from 'react'
import { FormCompProps } from '../../interfaces/auth/FormCompProps'

export const FormComp: React.FC<FormCompProps> = ({
    children, stylesForm, handleSubmit, submit
}) => {
    return (
        <form
            autoComplete='on'
            onSubmit={handleSubmit(submit)}
            className={`
                ${stylesForm}
            `}
        >
            {children}
        </form>
    )
}
