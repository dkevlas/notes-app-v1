export const ErrorUnknown = (err, res) =>{
    let path
    let message
    let origin
    try{
        path = err.errors.description.path
        message = err.errors.description.properties.message
        origin = 'server'
    } catch(err){
        path = ""
        message = "Los campos no pueden estar vacíos"
        origin = 'unknown'
    }
    res.status(500).json({
        success: false,
        origin: origin,
        errors: err.message,
        field: path ,
        message: message 
    });
};
