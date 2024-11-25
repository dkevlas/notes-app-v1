import { z } from "zod"

export const validateZod = ( validate ) => {
    return (req, res, next) => {
        try{
            validate.parse(req.body)
            next()
        } catch(err){
            if(err instanceof z.ZodError){
                res.status(403).json({
                    success: false,
                    origin: "client",
                    field: err.issues[0].path.join(''),
                    message: err.issues[0].message
                })
            } else {
                console.log('Error desconocido al validar el registro', err.message);
                res.status(500).json({
                    success: false,
                    message: "Error desconocido al validar el registro",
                    errors: err.message
                })
            }
        }
    }
};
