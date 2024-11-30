import React from 'react'
import { useAuthHook } from '../hook/AuthHook'
import { Navigate } from 'react-router-dom';
import { LoadRotate } from '../components/OthersComponents/LoadRotate';
import { TasksTemplate } from '../templates/TasksTemplate';
import { useTasksHook } from '../hook/TasksHook';
import { ModalMessage } from '../components/OthersComponents/ModalMessage';

export const Profile: React.FC = () => {
    const { loading, tokenStatus } = useAuthHook();
    const { responseDataTasks } = useTasksHook();

    if(loading){
        return (<LoadRotate styles='bottom-1/2 absolute' showLoad={!tokenStatus?.success} />)
    }
    if(tokenStatus?.success){
        if(tokenStatus.success && responseDataTasks){
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
