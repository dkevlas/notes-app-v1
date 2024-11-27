import React, { useEffect, useState } from 'react'
import { FormComp } from '../components/FormsComp/FormComp'
import { InputComp } from '../components/FormsComp/InputComp'
import { useForm } from 'react-hook-form'
import { SubmitComp } from '../components/FormsComp/SubmitComp'
import { useAuthHook } from '../hook/AuthHook'
import { ModalMessage } from '../components/FormsComp/ModalMessage'
import { LoadRotate } from '../components/Othres/LoadRotate'
import { RegisterData } from '../interfaces/auth/ResisterData'


export const RegisterTemplate: React.FC = () => {
    const { register, handleSubmit, reset, formState: {errors, isValid} } = useForm<RegisterData>({mode: 'onChange'})
    const { sendApiRegister, response } = useAuthHook()
    const [ showLoad, setShowLoad ] = useState<boolean | undefined>(undefined)
    const submit = async (data: RegisterData) => {
        setShowLoad(true)
        await sendApiRegister?.(data)
    }
    useEffect(()=>{
        if(response?.success === true) {
            reset()
        }
        setShowLoad(false)
    }, [response])
    return (
        <FormComp
            handleSubmit={handleSubmit}
            submit={submit}
        >
            <InputComp 
                label='Usuario'
                type='text'
                name='username'
                autocomplete='username'
                register={register}
                errForm={errors?.username?.message}
                validate={{
                    required: 'Se necesita un usuario',
                    pattern: {
                        value: /^\S+$/,
                        message: 'Usuario inválido, sin espacios por favor'
                    },
                    minLength: {
                        value: 4,
                        message: 'Minimo de 4 carácteres'
                    }
                }}
                errRes={response}
            />
            <InputComp 
                label='Correo'
                name='email'
                type='email'
                autocomplete='email'
                register={register}
                errForm={errors?.email?.message}
                validate={{
                    required: 'Se necesita el correo',
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Por favor, ingresa un email válido',
                    }
                }}
                errRes={response}
            />
            <InputComp 
                label='Contraseña'
                type='password'
                name='password'
                autocomplete='new-password'
                register={register}
                errForm={errors?.password?.message}
                validate={{
                    required: 'La contraseña es obligatorio',
                    minLength: {
                        value: 8,
                        message: 'Mínimo de 8 carácteres'
                    },
                    maxLength: {
                        value: 16,
                        message: 'Máximo de 16 carácteres'
                    }
                }}
                errRes={response}
            />
            <SubmitComp
                disabled={isValid}
                action='Crear Cuenta'
            />
            <ModalMessage 
                typeMessage={response}
            />
            <LoadRotate 
                showLoad={showLoad}
            />
        </FormComp>
    )
}
