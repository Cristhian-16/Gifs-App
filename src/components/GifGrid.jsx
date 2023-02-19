import React from 'react'
import { GifItem } from './GifItem.jsx'
import { useFecthGifs } from '../hooks/useFecthGifs.js'


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFecthGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h3>Cargando...</h3>)
            }
            <div className='card-grid'>
                {images.map(image => (
                    <GifItem
                        key={image.id}
                        {...image}
                    />
                ))}
            </div>
        </>
    )
}
