import { MouseEventHandler } from "react";

export interface ButtonTaskProps{
    action?: string,
    styles?: string,
    onclick?: MouseEventHandler<HTMLButtonElement>
}