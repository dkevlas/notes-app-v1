import axios from "axios";
export const AxiosErrors = (err: unknown) =>{
    if(err instanceof axios.AxiosError){
        if(err.response){
            return err.response.data || { 
                success: false,
                error_type: 'response', 
                error_message: 'Hubo un error al procesar la respuesta.' 
            }
        }
        if(err.request){
            return { 
                success: false,
                error_type: 'request', 
                error_message: 'No se pudo conectar al servidor. Intenta nuevamente.' 
            }
        }
    } else {
        return { 
            success: false,
            error_type: 'unknown', 
            error_message: 'Algo salió mal. Intenta de nuevo más tarde.'
        }
    }
};
