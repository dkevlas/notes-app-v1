import jwt from "jsonwebtoken";
import { ErrorUnknown } from "../libs/ErrorUnknown.js";
import { config } from "../config.js";

class Session {
    async logout(req, res){
        try{
            const { token } = req.cookies
            console.log(token)
            res.clearCookie('token', {
                secure: true,
                httpOnly: true,
                sameSite: 'none',
            })
            res.json({
                success: true,
                success_message: 'Cierre de sesión exitoso'
            })
        } catch(err){
            ErrorUnknown(err, res)
        }
    }
    async verifyToken(req, res){
        // const { token } = req.cookies
        // if (!token) {
        //     return res.status(401).json({
        //         success: false,
        //         message: 'Token nulo'
        //     })
        // }
        try{
            const { token } = req.cookies
            const decoded = jwt.verify(token, config.TOKEN_SECRET)
            if(!decoded){
                res.clearCookie('token')
                res.status(402).json({
                    success: false,
                    error: "Usuario no válido"
                })
            }
            res.json({
                success: true,
                message: 'Usuario válido',
            })
        } catch(err){
            ErrorUnknown(err, res)
        }
    }
}

export default new Session();
