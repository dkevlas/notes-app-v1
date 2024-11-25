import React from 'react'

interface SpanErrorsProps {
    errClient?: string,
    errServer?: string
}

export const SpanMessageError: React.FC<SpanErrorsProps> = ({
    errClient, errServer
}) => {
    return (
        <span className='absolute text-red-500 text-xs font-semibold'>
            {errServer || errClient}
        </span>
    )
}
