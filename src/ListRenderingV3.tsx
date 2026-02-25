import React, { useState } from 'react'
import Panel from './Panel'

type Props = {}

export default function ListRenderingV3({ }: Props) {
    // let items = ["apple", "mango", "banana"]

    let [product, setProduct] = useState({
        title: 'apple',
        price: 999
    })
    let [items, setItems] = useState<string[]>(["apple", "mango", "banana", "kiwi"])

    function handleDelete() {
        // create duplicate first then change
        let duplicateItems = [...items]
        duplicateItems.pop() // actually deletes the last item

        // pop cahnges the original data


        // filter()

        setItems(duplicateItems) // array are reference types 
        // when setting new value to ref types
        // we must use clones 
        // because same ref variable will not be considered as diff
    }

    return (
        <div>
            <button onClick={handleDelete}>Delete Last item</button>
            <hr />
            {
                items.map(x => <h1 key={x}>{x}</h1>)
            }
        </div>
    )
}