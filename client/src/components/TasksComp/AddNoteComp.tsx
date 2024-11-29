import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputComp } from '../FormsComp/InputComp'
import { FormComp } from '../FormsComp/FormComp'
import { SubmitComp } from '../FormsComp/SubmitComp'
import { TextareaComp } from './TextareaComp'
import { useTasksHook } from '../../hook/TasksHook'
import { TaskData } from '../../interfaces/tasks/TaskData'
import { LoadRotate } from '../OthersComponents/LoadRotate'
import { ModalMessage } from '../OthersComponents/ModalMessage'

export const AddNoteComp: React.FC = () => {
    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<TaskData>({mode: 'onChange'})
    const { insertTask, response } = useTasksHook()
    const [ load, setLoad ] = useState<boolean | null>(null)
    const [ res, setRes ] = useState()
    const submit = async (data: TaskData) =>{
        setLoad(true)
        const response: any = await insertTask?.(data)
        setLoad(false)
        setRes(response)
        if(response?.success){
            reset()
        }
    }

    return (
        <FormComp
            stylesForm='p-4 bg-slate-900 rounded-md'
            handleSubmit={handleSubmit}
            submit={submit}
        >
            <InputComp 
                label='Titulo'
                name='title'
                type='text'
                register={register}
                styleInput='bg-slate-500 text-slate-900'
                validate={{
                    required: 'El título es necesario',
                    pattern: {
                        value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s,.\-!?;:'"()&%$#@¡¿¡¨*+~\[\]{}|\\^_`<>¬ºªñÑ]*(\r?\n[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s,.\-!?;:'"()&%$#@¡¿¡¨*+~\[\]{}|\\^_`<>¬ºªñÑ]*)*$/,
                        message: 'No puede contener solo espacios.'
                    }
                }}
                errForm={errors.title?.message}
                errRes={res}
            />
            <TextareaComp 
                label='Descripción'
                name='description'
                register={register}
                styles='text-slate-900'
                errForm={errors.description?.message}
                validate={{
                    required: 'La descripción no puede estar vacía',
                    maxLength: {
                        value: 300,
                        message: 'La descripción debe tener 300 caracteres como máximo.'
                    },
                    pattern: {
                        value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s,.\-!?;:'"()&%$#@¡¿¡¨*+~\[\]{}|\\^_`<>¬ºªñÑ]*(\r?\n[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s,.\-!?;:'"()&%$#@¡¿¡¨*+~\[\]{}|\\^_`<>¬ºªñÑ]*)*$/,
                        message: 'Solo se permiten algunos signos de puntuación'
                    }
                }}
                resError={res}
            />
            <div className='relative w-max ml-auto'>
                <SubmitComp 
                    action='Crear Nota'
                    disabled={isValid}
                />
                { load && <LoadRotate showLoad={load} styles='top-1/2 left-1/2 absolute w-full h-full' stylesSVG='fill-slate-700'/>}
            </div>
            <ModalMessage typeMessage={response} styles='fixed' />
        </FormComp>
    )
}
