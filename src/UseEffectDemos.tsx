import React, { useEffect, useState } from 'react'

type Props = {}

// use effect has 3 use case
// 1. to do something on Component Load (and only on component load)
// eg. api call

export default function UseEffectDemos({ }: Props) {
    const [items, setItems] = useState<string[]>([])
    const [count, setCount] = useState(0)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    function apiCall() {
        setIsLoading(true)
        // this function will be executed on Component Load
        fetch('https://dummyjson.com/products/category-list')
            .then(x => x.json())
            .then(response => {
                // this is where response in json format arrives
                setItems(response)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    // useEffect(apiCall, []) // function be called on component load only

    useEffect(() => {
        console.log("USE EFFECT")
    }, [count])


    // useEffect(apiCall, [count]) // on page load + evey time when the variable changes
    return (
        <div>
            UseEffectDemos <button onClick={() => setCount(count + 1)}>Sync Again</button>
            <hr />
            {count}
            <br/>
            {
                isLoading
                    ? 'Loading...'
                    : items.map(x => <h3>{x}</h3>)
            }
        </div>
    )
}