import app from './app.js';
import { config } from './config.js';
import { connectDB } from './database/database.js';

connectDB()

app.listen(config.PORT, config.HOST, ()=>{
    console.log(`Server this running succes http://${config.HOST}:${config.PORT}`)
});
