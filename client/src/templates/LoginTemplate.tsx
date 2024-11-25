import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormComp } from '../components/FormsComp/FormComp'
import { InputComp } from '../components/FormsComp/InputComp'
import { SubmitComp } from '../components/FormsComp/SubmitComp'
import { useAuthHook } from '../hook/AuthHook'
import { ModalMessage } from '../components/FormsComp/ModalMessage'
import { LoadRotate } from '../components/Othres/LoadRotate'

export interface LoginData {
    email: string,
    password: string
}
export const LoginTemplate: React.FC = () => {

    const { register, handleSubmit, formState: {errors, isValid} } = useForm<LoginData>({mode: 'onChange'})
    const { response, sendApiLogin, saveToken } = useAuthHook()
    const [ showLoad, setShowLoad ] = useState<boolean | undefined>(undefined)
    const submit = async (data: LoginData) =>{
        setShowLoad(true)
        await sendApiLogin?.(data)
    }
    useEffect(()=>{
        if(response?.token){
            saveToken?.(response.token)
        }
        setShowLoad(false)
    }, [response])
    return (
        <FormComp
            handleSubmit={handleSubmit}
            submit={submit}
        >
            <InputComp 
                label='Correo'
                name='email'
                type='email'
                autocomplete='email'
                register={register}
                validate={{
                    required: 'El correo es obligatorio',
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Por favor, ingresa un email válido',
                    }
                }}
                errForm={errors?.email?.message}
                errRes={response}
            />
            <InputComp 
                label='Contraseña'
                name='password'
                type='password'
                autocomplete='current-password'
                register={register}
                validate={{
                    required: 'La contraseña es obligatoria',
                    minLength: {
                        value: 8,
                        message: 'Minimo de 8 carácteres'
                    }
                }}
                errForm={errors?.password?.message}
                errRes={response}
            />
            <SubmitComp
                disabled={isValid}
                action='Entrar'
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
