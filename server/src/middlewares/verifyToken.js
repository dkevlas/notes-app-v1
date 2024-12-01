import jwt from 'jsonwebtoken';
import { config } from '../config.js';

export const verifyToken = (req, res, next) =>{
    const { token } = req.cookies
    if(!token){
        return res.status(401).json({
            success: false,
            error_type: "token_error",
            error_message: 'No hay token'
        })
    }
    try{
        const decoded = jwt.verify(token, config.TOKEN_SECRET);
        req.user = decoded
        return next()
    } catch(err){
        return res.status(401).json({
            success: false,
            error_type: "token_error",
            error_message: "Tu sesión ya no es válida. Vuelve a iniciar sesión."
        })
    }
};
