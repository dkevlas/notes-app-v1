import axios, { AxiosInstance } from "axios";
import { RegisterData } from "../templates/RegisterTemplate";
import { AxiosErrors } from "../utils/AxiosError";
import { LoginData } from "../templates/LoginTemplate";

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