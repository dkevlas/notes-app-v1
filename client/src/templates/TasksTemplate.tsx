import React, { useEffect, useRef, useState } from 'react'
import { WelcomeComp } from '../components/TasksComp/WelcomeComp'
import { AddNoteComp } from '../components/TasksComp/AddNoteComp'
import { NotesListComp } from '../components/TasksComp/NotesListComp'
import { useTasksHook } from '../hook/TasksHook'
import { LoadRotate } from '../components/OthersComponents/LoadRotate'
import { TaskData } from '../interfaces/tasks/TaskData'
import { DataResponseTasks } from '../interfaces/tasks/DataResponseTasks'
import { NoNotesMessage } from '../components/TasksComp/NoNotesMessage'
import { ShowResponse } from '../interfaces/tasks/ShowResponse'
import { HandlerMessageErrors } from '../utils/HandlerMessageErrors'
import { GetTasks } from '../api/TasksApi'

export const TasksTemplate: React.FC = () => {
    const { responseDataTasks, username, eraseTask, editTask } = useTasksHook();
    const [ noteSelected, setNoteSelect ] = useState<number | null>(null)
    const [ isNoteDelete, setIsNoteDelete ] = useState<number | null>(null)
    const [ showError, setShowError ] = useState<ShowResponse>({})
    const allNotes: DataResponseTasks | undefined = responseDataTasks
    const containerRefAddNote = useRef<HTMLDivElement>(null)

    const deleteNote = async (id: string, i: number) =>{
        setIsNoteDelete(i)
        await eraseTask?.(id)
        setIsNoteDelete(null)
    }
    const eventOutside = (event: MouseEvent) =>{
        if(containerRefAddNote.current?.contains(event.target as Node)){
            setNoteSelect(null)
        }
    }
    useEffect(()=>{
        document.addEventListener('click', eventOutside)
        return ()=> document.removeEventListener('click', eventOutside)
    },[])

    const updateNote = async (data: TaskData, id: string, index: number) => {
        if(noteSelected || noteSelected === 0){
            if(noteSelected === index){
                    const res: any = await editTask?.(id, data)
                    HandlerMessageErrors(res, setShowError)
                    GetTasks()
                    if(res.success){
                        setNoteSelect(null)
                    }
            } else{
                setNoteSelect(index)
            }
        } else{
            setNoteSelect(index)
        }
    }

    if(!allNotes){
        return <LoadRotate />
    }

    return (
        <section className='min-w-72 max-w-screen-2xl m-auto px-4'>
            <div>
                <WelcomeComp user={username} />
            </div>

            <div ref={containerRefAddNote} className='max-w-96 m-auto rounded-lg border-2 border-slate-400 shadow-slate-400 shadow-sm' >
                <AddNoteComp />
            </div>

            <h3 className='text-2xl text-slate-600 mx-4 mt-10 py-2 font-bold border-b-2 border-slate-600'>Tus notas:</h3>
            
            {allNotes.notes?.length === 0 && <NoNotesMessage />}

            <div className='mt-8 grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3 '>  
                {allNotes?.notes?.map((item, index) => (
                    <NotesListComp key={item?._id}
                        isNoteDelete={isNoteDelete === index ? true : false}
                        errSpan={noteSelected === index ? showError?.message : ''}
                        notes={item}
                        actionElement={noteSelected === index ? 'Guardar' : 'Editar'}
                        isSelect={noteSelected === index ? false : true}
                        deleteEvent={()=>deleteNote(item._id, index)}
                        updateEvent={(data: TaskData)=>updateNote(data, item._id, index)}
                    />
                ))}
            </div>
        </section>
    )
}
