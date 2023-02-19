import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (newValue) => {

        if (categories.includes(newValue)) return;

        setCategories([newValue, ...categories])
    }

    return (
        <>
            <h1>Generador de Gifs</h1>
            <AddCategory onNewCategory={onAddCategory} /> {/* event => onAddCategory(event) */}

            {categories.map(cat =>
                <GifGrid
                    category={cat}
                    key={cat}
                />)}

        </>
    )
}
