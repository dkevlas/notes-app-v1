import React from 'react'
import { List } from './List'

export const HowItWorksComp: React.FC = () => {
    const items = [
        'Regístrate en minutos.',
        'Crea, edita o elimina notas según lo necesites.',
        'Accede a tus notas en cualquier lugar y momento.'
    ]
    return (
        <>
            <List
                subtitle='¿Cómo funciona?'
                items={items}
                styleSubtitle='list-outside list-disc'
                listStyle='list-decimal'
            />
        </>
    )
}
