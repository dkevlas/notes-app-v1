import jwt from 'jsonwebtoken';
import { config } from '../config.js'

export const CreateToken = (payload) =>{
    try{
        const token = jwt.sign( payload, config.TOKEN_SECRET, {expiresIn: '1d'} )
        return token
    } catch(err){
        console.log(err.message)
        return null
    }
};
