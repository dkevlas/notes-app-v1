import React from 'react'
import { SectionFormProps } from '../../interfaces/auth/SectionFormProps';


export const SectionForm: React.FC<SectionFormProps> = ({
    children, styles, isLogin
}) => {
    return (
        <section 
            className={`${styles}
                w-11/12 mt-16 max-w-sm min-w-72 m-auto pt-16 py-4 px-2 flex flex-col gap-6 bg-slate-900 rounded-lg
        `}>
            <h3
                className='text-3xl text-center font-bold text-slate-400'
            >
                { isLogin ? 'Registrarse' : 'Iniciar Sesión'}
            </h3>
            {children}
        </section>
    )
};
