import { TaskData } from "../tasks/TaskData";

export interface TasksContextValues {
    loadTasks?: ()=> Promise<void>,
    insertTask?: (data: TaskData)=> Promise<void>,
    eraseTask?: (id: string)=> Promise<void>,
    editTask?: (id: string, data: TaskData)=> Promise<void>,
    responseDataTasks?: any,
    username?: string,
    newNote?: boolean,
    setNewNote?: React.Dispatch<React.SetStateAction<boolean>>,
    dataNote?: TaskData,
    setDataNote?: React.Dispatch<React.SetStateAction<TaskData>>,
    changeDataNote?: (title: string, description: string) => void,
}