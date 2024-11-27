import React, { useEffect, useState } from 'react'
import { SignComp } from '../components/FormsComp/SignComp'
import { Params, useParams } from 'react-router-dom'
import { NotFound } from './NotFound'
import { RegisterTemplate } from '../templates/RegisterTemplate'
import { LoginTemplate } from '../templates/LoginTemplate'

export const Auth: React.FC<any> = ({}) => {
    const [ isLogin, setIsLogin ] = useState<boolean>(true)
    const authRouteParam: Readonly<Params<string>> = useParams()
    useEffect(()=>{
        if(authRouteParam){
            if(authRouteParam.auth === 'iniciar-sesion'){
                setIsLogin(false)
            }
            else if(authRouteParam.auth === 'registrarse'){
                setIsLogin(true)
            }
        }
    }, [authRouteParam])
    const toggle = () => {
        setIsLogin(!isLogin)
    }
    if(authRouteParam){
        if(authRouteParam.auth === 'iniciar-sesion' || authRouteParam.auth ==='registrarse'){
            return (
                <section className='w-11/12 max-w-sm min-w-72 m-auto mt-6 py-4 px-2 flex flex-col gap-6 bg-slate-900 rounded-lg' >
                    <h3 className='text-3xl text-center font-bold text-slate-400' >
                        {isLogin ? 'Registrarse' : 'Iniciar Sesión'}
                    </h3>
                    <div>
                        {
                            isLogin ?
                            <RegisterTemplate /> :
                            <LoginTemplate />
                        }
                    </div>
                    <SignComp
                        onClick={toggle}
                        route={isLogin ? `/cuenta/${'iniciar-sesion'}` : `/cuenta/${'registrarse'}`}
                        textLink={isLogin ? 'Iniciar Sesión' : 'Registrarse'}
                        showText={isLogin ? '¿Tienes una cuenta?' : '¿No tienes una cuenta?'}
                    />
                </section>
            )
        }
    }
    return (
        <>
            <NotFound />
        </>
    )
}
