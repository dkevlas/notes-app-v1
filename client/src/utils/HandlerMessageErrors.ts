export const HandlerMessageErrors = (err: any, set: any) =>{
    if(err?.origin === 'client'){
        set({
            message: err.message,
            field: err.field
        })
    }
    if(err?.origin === 'server'){
        set({
            message: err.message,
            field: err.field
        })
    }
    if(err?.origin){
        const finallyMessage = setTimeout(()=>{
            set({})
        }, 5000)
        return () => clearTimeout(finallyMessage)
    }
}