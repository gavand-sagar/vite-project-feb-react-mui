import React from 'react'

type Props = {
    title: string,
    setCartInfo: React.Dispatch<React.SetStateAction<any[]>>
    cartInfo: any[]
}

export default function ProductItem({ title, setCartInfo, cartInfo }: Props) {
    return (
        <fieldset style={{ margin: '5px' }}>
            {title} <button onClick={() => setCartInfo([...cartInfo, title])}>Add</button>
        </fieldset>
    )
}