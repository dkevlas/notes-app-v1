import { config } from "../config.js";

export const handlerError = (err, req, res, next) =>{
    console.log(`CODE: ${res.statusCode} - RUTA: ${req.url}`);
    console.log('Error Internal Server', err.message);
    console.log('Stack Trace:', err.stack);
    res.status(res.statusCode || 500).json({
        error_type: "unknown",
        error_message: err.message,
        stack: config.NODE_ENV === 'development' ? err.stack : undefined
    })
};
