import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { ResponseData } from "../../context/AuthContext";

export interface InputProps {
    styleInput?: string,
    styleLabel?: string,
    label: string,
    type: string,
    name: string,
    autocomplete?: string,
    register: UseFormRegister<any>,
    validate?: RegisterOptions<any, string>,
    errForm?: string | undefined,
    errRes?: ResponseData
}
