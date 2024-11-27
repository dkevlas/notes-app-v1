import { LoginData } from "../auth/LoginData";
import { RegisterData } from "../auth/ResisterData";
import { ResponseData } from "./ResponseData";

export interface AuthContextValues {
    response?: ResponseData,
    setResponse?: React.Dispatch<React.SetStateAction<ResponseData | undefined>>,
    sendApiRegister?: ((data: RegisterData) => Promise<void> | undefined) | undefined,
    sendApiLogin?: ((data: LoginData) => Promise<void> | undefined) | undefined,
    isAuthenticated?: boolean,
    loading?: boolean,
    saveToken?: (token: string) => void
};