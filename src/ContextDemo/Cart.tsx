import React from 'react'
import ProductItem from './ProductItem'

type Props = {
    setCartInfo: React.Dispatch<React.SetStateAction<any[]>>
    cartInfo: any[]
}

export default function Cart({ setCartInfo, cartInfo }: Props) {
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
            <h3>Cart</h3>
            {
                productList.map(x => <ProductItem setCartInfo={setCartInfo} cartInfo={cartInfo} title={x.title} />)
            }
        </fieldset>
    )
}