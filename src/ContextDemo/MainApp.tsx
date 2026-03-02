import React from 'react'
import Appbar from './Appbar'
import ProductList from './ProductList'
import Cart from './Cart'

type Props = {}

export default function MainApp({ }: Props) {
    return (
        <div>
            <Appbar />
            <ProductList />
            <Cart />
        </div>
    )
}