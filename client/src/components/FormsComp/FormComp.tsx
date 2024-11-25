import React, { ReactNode } from 'react'
import { FieldValues, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'
import { LoginData } from '../../templates/LoginTemplate'

interface FormCompProps {
    children: ReactNode,
    stylesForm?: string,
    handleSubmit: UseFormHandleSubmit<FieldValues, undefined>,
    submit: SubmitHandler<LoginData | any>
}

export const FormComp: React.FC<FormCompProps> = ({
    children, stylesForm, handleSubmit, submit
}) => {
    return (
        <form
            autoComplete='on'
            onSubmit={handleSubmit(submit)}
            className={
                `${stylesForm}
                
                `
            }
        >
            {children}
        </form>
    )
}
