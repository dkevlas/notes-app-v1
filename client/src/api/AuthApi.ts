import { LoginData } from './../interfaces/auth/LoginData';
import { RegisterData } from './../interfaces/auth/ResisterData';
import axios, { AxiosInstance } from "axios";
import { AxiosErrors } from "../utils/AxiosError";

const apiAuth: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
    withCredentials: true,
});

export const Register = async (data: RegisterData) =>{
    try{
        const response = await apiAuth.post('/register', data)
        return response.data
    } catch(err){
        return AxiosErrors(err)
    }
};

export const Login = async (data: LoginData) =>{
    try{
        const response = await apiAuth.post('/login', data)
        return response.data
    } catch(err){
        return AxiosErrors(err)
    }
}