import React, { createContext, useEffect, useState } from "react";
import { Register, Login } from "../api/AuthApi";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { AuthContextValues } from "../interfaces/context/AuthContextValues";
import { RegisterData } from "../interfaces/auth/ResisterData";
import { LoginData } from "../interfaces/auth/LoginData";
import { ResponseData } from "../interfaces/context/ResponseData";
import { AuthProviderProps } from "../interfaces/context/AuthProviderProps";

export const myAuthContext = createContext<AuthContextValues>({});

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) =>{
    const [ response , setResponse ] = useState<ResponseData | undefined>(undefined);
    const [ loading, setLoading ] = useState<boolean>(true)
    const [ isAuthenticated, setIsAuthenticated ] = useState<boolean>(false)
    const navigate = useNavigate()
    const sendApiRegister = async  (data: RegisterData) =>{
        const response = await Register(data);
        setResponse(response);
    };
    const sendApiLogin = async (data: LoginData) =>{
        const response = await Login(data);
        if(response?.success) navigate('/perfil')
        setResponse(response)
    }
    const saveToken = (token: string) =>{
        Cookies.set('token', token, {expires: 1})
    }

    useEffect(()=>{
        const token = Cookies.get('token')
        token ? setIsAuthenticated(true) : setIsAuthenticated(false);
        setLoading(false)
    }, [response])
    return (
        <myAuthContext.Provider
            value={{
                response,
                setResponse,
                sendApiRegister,
                sendApiLogin,
                isAuthenticated,
                loading,
                saveToken
            }}
        >
            {children}
        </myAuthContext.Provider>
    )
};
