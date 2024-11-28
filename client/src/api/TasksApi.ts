import axios, { AxiosInstance } from "axios";
import { AxiosErrors } from "../utils/AxiosError";
import { TaskData } from "../interfaces/tasks/TaskData";

const apiTasks: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

export const GetTasks = async () => {
    try{
        const response = await apiTasks.get('/tasks');
        return response.data
    } catch(err){
        return AxiosErrors(err)
    }
};

export const CreateTask = async (data: TaskData) =>{
    try{
        const response = await apiTasks.post('/tasks', data)
        return response.data
    } catch(err){
        return AxiosErrors(err)
    }
};

export const UpdateTask = async (id: string, data: any) =>{
    try{
        const response = await apiTasks.put(`/tasks/${id}`, data)
        return response.data
    } catch(err){
        return AxiosErrors(err)
    }
};

export const DeleteTask = async (id: string) =>{
    try{
        const response = await apiTasks.delete(`/tasks/${id}`)
        return response.data
    } catch(err){
        return AxiosErrors(err)
    }
};
