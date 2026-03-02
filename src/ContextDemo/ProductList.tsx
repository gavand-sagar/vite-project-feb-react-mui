import React, { useState } from 'react'

type Props = {}

export default function ProductList({ }: Props) {
    const productList = [{
        title: 'mobile'
    }, {
        title: 'laptop'
    }]

    const [cartInfo, setCartInfo] = useState<any[]>([])
    return (
        <fieldset style={{
            display: 'inline-block', width: '40%',
            marginTop: '100px',
            height: '300px'
        }}>
            <h3>Product List</h3>
            <span>In Cart: {cartInfo.length}</span>
            {
                productList.map(x => <fieldset style={{ margin: '5px' }}>
                    {x.title} <button onClick={() => setCartInfo([...cartInfo, x.title])}>Add</button>
                </fieldset>)
            }
        </fieldset>
    )
}