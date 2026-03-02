import React, { useState } from 'react'
import Appbar from './Appbar'
import ProductList from './ProductList'
import Cart from './Cart'

type Props = {}

export default function MainApp({ }: Props) {
    const [cartInfo, setCartInfo] = useState<any[]>([])
    return (
        <div>
            <Appbar cartInfo={cartInfo} />
            <ProductList cartInfo={cartInfo} setCartInfo={setCartInfo} />
            <Cart cartInfo={cartInfo} setCartInfo={setCartInfo}/>
        </div>
    )
}