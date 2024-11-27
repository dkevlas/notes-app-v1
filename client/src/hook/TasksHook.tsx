import { useContext } from "react";
import { myTasksContext } from "../context/TasksContext";
import { TasksContextValues } from "../interfaces/context/TasksContextValues";

export const useTasksHook = () =>{
    const context = useContext<TasksContextValues>(myTasksContext);
    if(!context) throw new Error('useTasksHook debe ser usado en TaskProvider')
    return context
};

