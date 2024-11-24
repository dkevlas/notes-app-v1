import bcrypt from 'bcrypt';
import AccountModel from '../models/Account.model.js';
import { CreateToken } from '../libs/CreateToken.js';

class Login {
    async authAccount(req, res){
        try{
            const { email, password } = req.body
            const userFound = await AccountModel.findOne({email: email.toLowerCase()})
            if(!userFound){
                return res.status(409).json({
                    success: false,
                    origin: "server",
                    field: "email",
                    message: "El correo no existe"
                });
            }
            const passwordMatch = await bcrypt.compare(password, userFound.password)
            if(!passwordMatch) return res.status(403).json({
                    success: false,
                    origin: "server",
                    field: "password",
                    message: "La contraseña es incorrecta"
                })
            const user = userFound.toObject()
            const resUser = {
                id: user._id,
                username: user.username
            }
            const token = CreateToken({id: userFound._id, username: userFound.username})
            if(!token) return res.status(500).json({
                origin: "unknown",
                message: "Error al generar el token"
            });
            res.cookie('token', token, {
                sameSite: "none",
                maxAge: 24 * 60 * 60 * 1000
            })
            res.json({
                success: true,
                message : "Iniciaste sesión exitosamente",
                user: resUser,
                token: token
            });
        } catch(err){
            res.status(500).json({
                success: false,
                errors: err.message
            });
        };
    };
};

export default new Login()