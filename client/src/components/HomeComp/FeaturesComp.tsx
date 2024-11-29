import React from 'react'
import { Feactures } from '../../interfaces/home/Features'
import { List } from './List'

export const FeaturesComp: React.FC<Feactures> = ({
    
}) => {
    const prueba = [
        'Agrega, modifica y elimina notas fácilmente.',
        'Sincroniza y accede a tus notas desde cualquier dispositivo.',
        'Autenticación segura para proteger tu información'
    ]
    return (
        <List 
            subtitle='Características'
            stylesItems='list-disc list-outside'
            items={prueba}
        />
    )
}
