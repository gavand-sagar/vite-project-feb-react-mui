import React, { useContext } from 'react'
import { CartContext } from '../data/CartContext'

type Props = {
    title: string
}

export default function ProductItem({ title }: Props) {
    const { cartInfo, setCartInfo } = useContext(CartContext)
    return (
        <fieldset style={{ margin: '5px' }}>
            {title} <button onClick={() => setCartInfo([...cartInfo, title])}>Add</button>
        </fieldset>
    )
}