import React from 'react'
import { Feactures } from '../../interfaces/home/Features'

export const List: React.FC <Feactures>= ({
    items, stylesItems, styleSubtitle, subtitle, listStyle
}) => {
    return (
        <>
            <div className='text-center justify-center w-full'>
                <h2 className={` ${styleSubtitle} text-2xl text-slate-300 my-2`}>{subtitle}</h2>
                <ul className={`${listStyle} text-start px-6 text-pretty`}>
                    {items && items?.map((item, index) => (
                        <li 
                            key={index} 
                            className={`${stylesItems} text-slate-400 text-sm ml-4`}
                        >
                            {item}
                        </li>
                    ))}
                </ ul>
            </div>
        </>
    )
}
