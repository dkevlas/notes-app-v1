import React, { useEffect, useState } from 'react'
import { SignComp } from '../components/FormsComp/SignComp'
import { Params, useParams } from 'react-router-dom'
import { NotFound } from './NotFound'
import { RegisterTemplate } from '../templates/RegisterTemplate'
import { LoginTemplate } from '../templates/LoginTemplate'
import { MessageAuth } from '../components/FormsComp/MessageAuth'
import { SectionForm } from '../components/FormsComp/SectionForm'
import { GoHomeSVG } from '../components/OthersComponents/GoHomeSVG'

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
                <div>
                    <MessageAuth  isLogin={isLogin}/>
                    <SectionForm isLogin={isLogin}>
                        { isLogin ? <RegisterTemplate /> : <LoginTemplate /> }
                        <SignComp
                            onClick={toggle}
                            route={isLogin ? `/cuenta/${'iniciar-sesion'}` : `/cuenta/${'registrarse'}`}
                            textLink={isLogin ? 'Iniciar Sesión' : 'Registrarse'}
                            showText={isLogin ? '¿Tienes una cuenta?' : '¿No tienes una cuenta?'}
                        />
                    </SectionForm>
                    <GoHomeSVG />
                </div>
            )
        }
    }
    return (
        <>
            <NotFound />
        </>
    )
}
