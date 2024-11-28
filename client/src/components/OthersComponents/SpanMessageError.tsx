import React from 'react'
import { SpanErrorsProps } from '../../interfaces/others/SpanErrorsProps'

export const SpanMessageError: React.FC<SpanErrorsProps> = ({
    errClient, errServer, styles
}) => {
    return (
        <span className={`${styles} absolute text-red-500 text-xs font-semibold`}>
            {errServer || errClient}
        </span>
    )
}
