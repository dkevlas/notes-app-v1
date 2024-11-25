import jwt from 'jsonwebtoken';
import { config } from '../config.js';

export const verifyToken = (req, res, next) =>{
    try{
        const { token } = req.cookies
        jwt.verify(token, config.TOKEN_SECRET, (err, decoded)=>{
            if(err) return res.status(401).json({
                success: false,
                error_type: "token_error",
                error_message: "Tu sesión ya no es válida. Vuelve a iniciar sesión."
            })
            req.user = decoded
            next()
        })
    } catch(err){
        res.status(500).json({
            error_type: "unknown"
        })
    }
};
