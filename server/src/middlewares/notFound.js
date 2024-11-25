export const notFound = (req, res, next) =>{
    res.status(404).json({
        success: false,
        error_message: "Lo sentimos, la página que buscas no existe."
    })
}