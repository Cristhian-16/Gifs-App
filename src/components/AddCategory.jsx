import React from 'react'
import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [input, setInput] = useState('')

    const onChangeInput = (e) => {
        setInput(e.target.value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault();

        const inputTrim = input.trim()
        if (inputTrim.length <= 1) return

        onNewCategory(inputTrim)

        setInput('')
    }

    return (
        <form onSubmit={onSubmitForm}>
            <input
                onChange={onChangeInput}
                type='text'
                placeholder='Buscar Gifs'
                value={input}
            />
        </form>
    )
}
