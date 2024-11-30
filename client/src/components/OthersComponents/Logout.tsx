import React, { useEffect, useState } from 'react'
// import Cookies from 'js-cookie'
import { useLocation, useNavigate } from 'react-router-dom'
import { LogoutApi } from '../../api/SessionApi'
const Logout: React.FC = () => {
    const [ action, setAction ] = useState<string>()
    const location = useLocation()
    const navigate = useNavigate()
    const actionClick = async () =>{
        if(location.pathname === '/perfil'){
            // const token = Cookies.get('token');
            // if(token) await LogoutApi(token)
            const res = await LogoutApi()
            console.log(res)
            navigate('/')
            // Cookies.remove('token')
        }
        if(location.pathname === '/'){
            navigate('/perfil')
        }
    }
    useEffect(()=>{
        if(location.pathname === '/perfil'){
            setAction('Cerrar Sesión')
        }
        if(location.pathname === '/'){
            setAction('Crear Nota')
        }
    }, [])
    return (
        <div className='bg-slate-950 w-max text-slate-500 px-2 py-1 select-none rounded-lg hover:outline hover:outline-2 hover: outline-slate-500 hover:cursor-pointer active:scale-95'
            onClick={actionClick}
        >
            {action}
        </div>
    )
}

export default Logout;
