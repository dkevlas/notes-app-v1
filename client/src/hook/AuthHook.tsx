import { useContext } from "react";
import { AuthContextValues, myAuthContext } from "../context/AuthContext";

export const useAuthHook = ()=> {
    const context = useContext<AuthContextValues>(myAuthContext)
    if(!context) throw new Error('useAuthHook debe ser usando en AuhProvider')
    return context;
};
