export const ErrorUnknown = (err, res) =>{
    res.status(500).json({
        success: false,
        errors: err.message
    });
};
