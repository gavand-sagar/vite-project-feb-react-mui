import React from 'react'

type Props = {
    cartInfo: any[]
}

export default function Appbar({ cartInfo }: Props) {
    return (
        <fieldset>Appbar total Items {cartInfo.length}</fieldset>
    )
}