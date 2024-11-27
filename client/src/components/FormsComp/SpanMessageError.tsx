import React from 'react'
import { SpanErrorsProps } from '../../interfaces/auth/SpanErrorsProps'

export const SpanMessageError: React.FC<SpanErrorsProps> = ({
    errClient, errServer
}) => {
    return (
        <span className='absolute text-red-500 text-xs font-semibold'>
            {errServer || errClient}
        </span>
    )
}
