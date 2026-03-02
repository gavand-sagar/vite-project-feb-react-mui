import React, { useState } from 'react'
import Appbar from './Appbar'
import ProductList from './ProductList'
import Cart from './Cart'
import { CartContext } from '../data/CartContext'

type Props = {}

export default function MainApp({ }: Props) {
    const [cartInfo, setCartInfo] = useState<any[]>([])
    return (
        <div>
            <CartContext.Provider value={{ cartInfo, setCartInfo }}>
                <Appbar />
                <ProductList />
                <Cart />
            </CartContext.Provider>
        </div>
    )
}