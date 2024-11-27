import { useContext } from "react";
import { myAuthContext } from "../context/AuthContext";
import { AuthContextValues } from "../interfaces/context/AuthContextValues";

export const useAuthHook = ()=> {
    const context = useContext<AuthContextValues>(myAuthContext)
    if(!context) throw new Error('useAuthHook debe ser usando en AuhProvider')
    return context;
};
