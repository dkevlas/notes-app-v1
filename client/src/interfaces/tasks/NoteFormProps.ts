import { ReactNode } from "react";
import { InfoNoteList } from "./InfoNoteList";

export interface NoteFormProps {
    children: ReactNode,
    styles?: string,
    info?: InfoNoteList,
    onsubmit?: React.FormEventHandler<HTMLFormElement> | undefined
}