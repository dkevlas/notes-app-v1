import { z } from 'zod';

export const RegisterValidator = z.object({
    username: z
        .string({
            required_error: 'El usuario es necesario',
        })
        .min(4, {
            message: 'Debe ser mínimo de 4 carácteres'
        })
        .regex(/^\S+$/, {
            message: 'Solo se permiten caracteres sin espacios en blanco.'
        }),
    email: z
        .string({
            required_error: 'El correo es obligatorio'
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
