import React, { createContext, useEffect, useState } from "react";
import { CreateTask, DeleteTask, GetTasks, UpdateTask } from "../api/TasksApi";
import { TaskData } from "../interfaces/tasks/TaskData";
import { TasksContextValues } from "../interfaces/context/TasksContextValues";
import { TasksProviderProps } from "../interfaces/context/TasksPropviderProps";

export const myTasksContext = createContext<TasksContextValues>({});

export const TasksProvider: React.FC<TasksProviderProps> = ({children}) =>{
    const [ responseDataTasks, setResponseDataTasks ] = useState()
    const [ newNote, setNewNote ] = useState<boolean>(false)
    const [ removedNote, setRemovedNote ] = useState<boolean>(false)
    
    const [ username, setUsername ] = useState<string | undefined>()
    
    const loadTasks = async () => { 
        const response = await GetTasks()
        if(response.username) setUsername(response.username)
        setResponseDataTasks(response)
    }
    
    const insertTask = async (data: TaskData) => {
        const response = await CreateTask(data)
        if(response.success) setNewNote(true)
        return response
    }
    
    const eraseTask = async (id: string) => { 
        const response = await DeleteTask(id)
        if(response.success) setRemovedNote(true)
        return response
    }
    
    const editTask = async (id: string, data: TaskData) => { 
        const response = await UpdateTask(id, data)
        console.log(response)
        return response
    }

    useEffect(()=>{
        loadTasks()
    }, [])

    useEffect(()=>{
        if(newNote === true){
            setNewNote(false)
            loadTasks()
        }
        if(removedNote === true){
            setRemovedNote(false)
            loadTasks()
        }
    }, [newNote, removedNote])
    return (
        <myTasksContext.Provider
            value={{
                loadTasks,
                insertTask,
                eraseTask,
                editTask,
                responseDataTasks,
                username,
                newNote,
                setNewNote,
            }}
        >
            {children}
        </myTasksContext.Provider>
    )
}