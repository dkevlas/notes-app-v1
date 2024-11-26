import { z } from "zod";

export const LoginValidator = z.object({
    email: z
        .string({
            required_error: 'El correo es obligatorio',
        })
        .email({
            message: 'El correo debe ser válido'
        }),
    password: z
        .string({
            required_error: 'La contraseña es obligatoria'
        })
        .min(8, {
            message: 'Mínimo de 8 carácteres'
        })
});
