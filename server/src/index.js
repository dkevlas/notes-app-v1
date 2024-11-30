import app from './app.js';
import { config } from './config.js';
import { connectDB } from './database/database.js';

connectDB()

const PORT = config.PORT;
const HOST = config.HOST;
app.listen(PORT, HOST, ()=>{
    console.log(`Server this running succes http://${config.HOST}:${config.PORT}`)
});
