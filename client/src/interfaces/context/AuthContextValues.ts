import { LoginData } from "../auth/LoginData";
import { RegisterData } from "../auth/ResisterData";
import { VerifyTokenData } from "../auth/VerifyToken";
import { ResponseData } from "./ResponseData";

export interface AuthContextValues {
    response?: ResponseData,
    setResponse?: React.Dispatch<React.SetStateAction<ResponseData | undefined>>,
    sendApiRegister?: ((data: RegisterData) => Promise<void> | undefined) | undefined,
    sendApiLogin?: ((data: LoginData) => Promise<void> | undefined) | undefined,
    loading?: boolean,
    tokenStatus?: VerifyTokenData | null,
};