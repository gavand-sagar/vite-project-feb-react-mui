import React, { useContext, useState } from 'react'
import ProductItem from './ProductItem'
import { CartContext } from '../data/CartContext'

type Props = {
}

export default function ProductList({ }: Props) {
    const productList = [{
        title: 'mobile'
    }, {
        title: 'laptop'
    }]

    const { cartInfo } = useContext(CartContext)


    return (
        <fieldset style={{
            display: 'inline-block', width: '40%',
            marginTop: '100px',
            height: '300px'
        }}>
            <h3>Product List</h3>
            <span>In Cart: {cartInfo.length}</span>
            {
                productList.map(x => <ProductItem title={x.title} />)
            }
        </fieldset>
    )
}