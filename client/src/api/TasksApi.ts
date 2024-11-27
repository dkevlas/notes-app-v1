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
        const response = AxiosErrors(err)
        console.log(response)
        return response
    }
};

export const CreateTask = async (data: TaskData) =>{
    try{
        const response = await apiTasks.post('/tasks', data)
        console.log(response.data)
        return response.data
    } catch(err){
        const response = AxiosErrors(err)
        return response
    }
};

export const UpdateTask = async (id: string, data: any) =>{
    try{
        const response = await apiTasks.put(`/tasks/${id}`, data)
        console.log(response.data)
        return response.data
    } catch(err){
        const response = AxiosErrors(err)
        console.log(response)
        return response
    }
};

export const DeleteTask = async (id: string) =>{
    try{
        const response = await apiTasks.delete(`/tasks/${id}`)
        console.log(response.data)
        return response.data
    } catch(err){
        const response = AxiosErrors(err)
        return response
    }
};
