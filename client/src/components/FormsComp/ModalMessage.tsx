import React, { useEffect, useState } from 'react'
import { ResponseData } from '../../interfaces/context/ResponseData'
import { MessageProps } from '../../interfaces/auth/MessageProps'

export const ModalMessage: React.FC<MessageProps> = ({
    typeMessage
}) => {
    const [ messageModal, setMessageModal ] = useState<ResponseData>({})
    const [ isRegisted, setIsRegisted ] = useState<boolean>(false)
    const [ hidden, setHidden ] = useState<boolean>(false)
    useEffect(()=>{
        if(typeMessage?.error_type){
            setMessageModal({
                error_message: typeMessage.error_message
            })
            setIsRegisted(false)
            setHidden(true)
        }
        if(typeMessage?.success === true){
            setMessageModal({
                success_message: typeMessage.success_message
            })
            setIsRegisted(true)
            setHidden(true)
        }
        if(typeMessage?.error_type || typeMessage?.success){
            const finallyMessage = setTimeout(()=>{
                setIsRegisted(false)
                setHidden(false)
            }, 5000)
            return ()=> clearTimeout(finallyMessage)
        }
    }, [typeMessage])
    return (
        <>
            {
                hidden &&
                (
                    <div className={
                        `${isRegisted ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}
                        text-blue-700 font-bold absolute p-4 rounded-lg text-lg right-10 bottom-10 max-w-64 text-center`
                    }>
                        {messageModal.error_message || messageModal.success_message}
                    </div>
                )
            }
        </>
    )
}
