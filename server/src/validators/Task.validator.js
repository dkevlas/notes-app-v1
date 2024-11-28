import { z } from "zod";

export const TaskValidator = z.object({
    title: z
        .string({
            required_error: 'El título es requerido',
        })
        .min(1, {
            message: 'La Titulo no puede estar vacía'
        })
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s,.\-!?;:'"()&%$#@¡¿¡¨*+~\[\]{}|\\^_`<>¬ºªñÑ]*(\r?\n[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s,.\-!?;:'"()&%$#@¡¿¡¨*+~\[\]{}|\\^_`<>¬ºªñÑ]*)*$/, {
            message: 'El título no puede estar vacío. Por favor ingresa un título válido.'
        }),
    description: z
        .string({
            required_error: 'La descripción es obligatoria',
        })
        .min(1, {
            message: 'La description no puede estar vacía'
        })
        .max(300, {
            message: 'Máximo de 300 carácteres'
        })
});
