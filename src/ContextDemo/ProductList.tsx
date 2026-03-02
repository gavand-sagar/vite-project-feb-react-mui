import React, { useState } from 'react'
import ProductItem from './ProductItem'

type Props = {
    setCartInfo: React.Dispatch<React.SetStateAction<any[]>>
    cartInfo: any[]
}

export default function ProductList({ setCartInfo, cartInfo }: Props) {
    const productList = [{
        title: 'mobile'
    }, {
        title: 'laptop'
    }]


    return (
        <fieldset style={{
            display: 'inline-block', width: '40%',
            marginTop: '100px',
            height: '300px'
        }}>
            <h3>Product List</h3>
            <span>In Cart: {cartInfo.length}</span>
            {
                productList.map(x => <ProductItem title={x.title} setCartInfo={setCartInfo} cartInfo={cartInfo} />)
            }
        </fieldset>
    )
}