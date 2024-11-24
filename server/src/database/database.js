import mongoose from 'mongoose'
import { config } from '../config.js';

export const connectDB = async () =>{
    try{
        await mongoose.connect(config.MONGO_URI)
        console.log('Conexión éxitosa a la database');
    } catch(err){
        console.log('Conexión fallida a la database', err);
    }
};
