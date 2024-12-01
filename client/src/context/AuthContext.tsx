import React, { createContext, useEffect, useState } from "react";
import { Register, Login } from "../api/AuthApi";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContextValues } from "../interfaces/context/AuthContextValues";
import { RegisterData } from "../interfaces/auth/ResisterData";
import { LoginData } from "../interfaces/auth/LoginData";
import { ResponseData } from "../interfaces/context/ResponseData";
import { AuthProviderProps } from "../interfaces/context/AuthProviderProps";
import { VerifyTokenData } from "../interfaces/auth/VerifyToken";
import { GetTasks } from "../api/TasksApi";

export const myAuthContext = createContext<AuthContextValues>({});

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) =>{
    const [ response , setResponse ] = useState<ResponseData | undefined>(undefined);
    const [ loading, setLoading ] = useState<boolean>(true)
    const [ tokenStatus, setTokenStatus ] = useState<VerifyTokenData | null>(null);
    const location = useLocation()
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
    const checkToken = async () => {
        setLoading(true)
        const res = await GetTasks()
        res ? setTokenStatus(res) : setTokenStatus(null)
        setLoading(false)
    }
    useEffect(()=>{
        if(location.pathname === '/perfil'){
            if(!tokenStatus?.success){
                checkToken()
            }
        }
    }, [])

    return (
        <myAuthContext.Provider
            value={{
                response,
                setResponse,
                sendApiRegister,
                sendApiLogin,
                loading,
                tokenStatus
            }}
        >
            {children}
        </myAuthContext.Provider>
    )
};
