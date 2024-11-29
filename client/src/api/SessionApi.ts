import axios, { AxiosInstance } from "axios";
import { AxiosErrors } from "../utils/AxiosError";

const apiSesion: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
    withCredentials: true
});

export const LogoutApi = async (token: string) =>{
    try{
        const response = await apiSesion.post('/session/logout', token)
        return response.data
    } catch(err){
        return AxiosErrors(err)
    }
}

export const VerifyToken = async () =>{
    try{
        const response = await apiSesion.get('/session/verify-token')
        return response.data
    } catch(err){
        return AxiosErrors(err)
    }
}