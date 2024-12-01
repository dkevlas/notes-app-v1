import { ErrorUnknown } from "../libs/ErrorUnknown.js";

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
}

export default new Session();
