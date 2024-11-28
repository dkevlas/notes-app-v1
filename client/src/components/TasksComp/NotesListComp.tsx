import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { TitleTaskComp } from './TitlleTaskComp'
import { DescriptionTaskComp } from './DescriptionTaskComp'
import { ButtonsTaskComp } from './ButtonsTaskComp'
import { NoteForm } from './NoteForm'
import { TaskData } from '../../interfaces/tasks/TaskData'
import { NotesListProps } from '../../interfaces/tasks/NoteListProps'
import { LoadRotate } from '../OthersComponents/LoadRotate'
import { SpanMessageError } from '../OthersComponents/SpanMessageError'

export const NotesListComp:React.FC<NotesListProps> = ({
    notes, actionElement, isSelect, deleteEvent, updateEvent, styles, isNoteDelete, errSpan
}) => {
    const [ data, setData ] = useState<TaskData>({
        title: notes?.title,
        description: notes?.description
    })
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) =>{
        setData({
            ...data,
            title: e.target.value
        })
    }
    const changeDescription = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        setData({
            ...data,
            description: e.target.value
        })
    }
    useEffect(()=>{
        if(errSpan){
            setData({
                title: notes?.title,
                description: notes?.description
            })
        }
    }, [errSpan])
    return (
        <NoteForm
            styles={styles}
            onsubmit={(e: FormEvent)=>{
                e.preventDefault()
            }}
        >
            <div className='border-solid w-full max-w-md bg-slate-900 border-slate-900 border-4 rounded-md flex flex-col mx-auto relative'>
                <TitleTaskComp
                    value={data.title}
                    disabled={isSelect}
                    onchange={changeTitle}
                    name='title'
                />
                <DescriptionTaskComp 
                    value={data.description}
                    disabled={isSelect}
                    onchange={changeDescription}
                    name='description'
                />
                { errSpan && <SpanMessageError errServer={errSpan} styles='bg-slate-400 py-2 px-4 m-auto text-center rounded-lg left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' />}
                { isNoteDelete && <LoadRotate showLoad={true} styles='absolute' />}
            </div>
            <div className='flex justify-center gap-4' >
                <ButtonsTaskComp 
                    action={actionElement}
                    styles={isSelect ? 'bg-slate-500' : 'bg-green-400'}
                    onclick={()=>updateEvent(data)}
                />
                <ButtonsTaskComp 
                    action='Eliminar'
                    styles='bg-red-500'
                    onclick={deleteEvent}
                />
            </div>
        </NoteForm>
    )
}
