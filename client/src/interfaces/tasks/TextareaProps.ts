import { UseFormRegister } from "react-hook-form";

export interface TextareaProps{
    label?: string,
    name: string,
    register: UseFormRegister<any>,
    errForm?: string | undefined,
    validate?: any,
    styles?: string
}