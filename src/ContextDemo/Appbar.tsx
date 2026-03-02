import React, { useContext } from 'react'
import { CartContext } from '../data/CartContext'

type Props = {
}

export default function Appbar({ }: Props) {
    const { cartInfo } = useContext(CartContext)
    return (
        <fieldset>Appbar total Items {cartInfo.length}</fieldset>
    )
}