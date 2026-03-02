import React from 'react'

type Props = {}

export default function Cart({ }: Props) {
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
                productList.map(x => <fieldset style={{ margin: '5px' }}>
                    {x.title} <button>Add</button>
                </fieldset>)
            }
        </fieldset>
    )
}