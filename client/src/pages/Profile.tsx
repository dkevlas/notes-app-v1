import React, { useEffect } from 'react'
import { useAuthHook } from '../hook/AuthHook'
import { Navigate } from 'react-router-dom';
import { LoadRotate } from '../components/OthersComponents/LoadRotate';
import { TasksTemplate } from '../templates/TasksTemplate';
import { useTasksHook } from '../hook/TasksHook';
import { ModalMessage } from '../components/OthersComponents/ModalMessage';
import { VerifyToken } from '../api/SessionApi';
import Cookies from 'js-cookie';

export const Profile: React.FC = () => {
    const { isAuthenticated, loading } = useAuthHook();
    const { responseDataTasks } = useTasksHook();
    const verifyToken = async () =>{
        const res = await VerifyToken()
        if(!res?.success) Cookies.remove('token')
    }
    useEffect(()=>{
        verifyToken()
    }, [])
    if(loading){
        return (<LoadRotate styles='bottom-1/2 absolute' showLoad={!isAuthenticated} />)
    }
    if(isAuthenticated){
        if(isAuthenticated && responseDataTasks){
            return (
                <>
                    <TasksTemplate />
                    { !responseDataTasks.success && <ModalMessage typeMessage={responseDataTasks}/>}
                </>
            )
        } else{
            return <LoadRotate styles='bottom-1/2 absolute' showLoad={true} />
        }
    } else{
        return <Navigate to='/cuenta' replace />
    }
}
