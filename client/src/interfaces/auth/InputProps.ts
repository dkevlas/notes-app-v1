import { ResponseData } from './../context/ResponseData';
import { RegisterOptions, UseFormRegister } from "react-hook-form";

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
