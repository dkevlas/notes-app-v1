import { ErrorUnknown } from "../libs/ErrorUnknown.js";
import AccountModel from "../models/Account.model.js";
import bcrypt from 'bcrypt';

class Register {
    async createAccount(req, res){
        try{
            const { username, email, password } = req.body;
            const normalizedUsername = username.toLowerCase();
            const userFound = await AccountModel.findOne({
                $or:[ {username: normalizedUsername}, {email: email.toLowerCase()} ]
            });
            if(userFound){
                if(userFound.normalizedUsername === normalizedUsername){
                    return res.status(409).json({ 
                        success: false,
                        origin: "server",
                        field: "username" ,
                        message: "Este usuario ya está registrado"
                    });
                }
                if(userFound.email === email.toLowerCase()){
                    return res.status(409).json({ 
                        success: false,
                        origin: "server",
                        field: "email", 
                        message: "Este correo ya está registrador"
                    });
                };
            };
            const passwordHashed = await bcrypt.hash(password, 10)
            const newUser = new AccountModel({
                username: username,
                normalizedUsername: normalizedUsername,
                email: email.toLowerCase(),
                password: passwordHashed
            });
            await newUser.save()
            const showUser = newUser.toObject()
            delete showUser.password
            res.status(201).json({
                success: true,
                success_message: "¡Registro exitoso! Inicia sesión para continuar.",
            });
        } catch(err){
            ErrorUnknown(err, res)
        };
    };
};

export default new Register();
