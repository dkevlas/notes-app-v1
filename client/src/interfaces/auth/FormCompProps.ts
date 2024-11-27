import { ReactNode } from "react";
import { FieldValues, SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
import { LoginData } from "./LoginData";

export interface FormCompProps {
    children: ReactNode,
    stylesForm?: string,
    handleSubmit: UseFormHandleSubmit<FieldValues, undefined>,
    submit: SubmitHandler<LoginData | any>
}