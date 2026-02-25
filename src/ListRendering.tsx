import React from 'react'
import Panel from './Panel'

type Props = {}

export default function ListRendering({ }: Props) {
    let items = ["apple", "mango", "banana"]
    let title = "Fruit"
    return (
        <div>
            {
                items.map(x => <Panel title={x}/>)
            }
        </div>
    )
}