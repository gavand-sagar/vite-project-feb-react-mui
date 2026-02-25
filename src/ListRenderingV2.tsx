import React from 'react'
import Panel from './Panel'
import type { propType } from './util'
import { Person } from './Sagar'

type Props = {}

export default function ListRenderingV2({ }: Props) {
    let items: propType[] = [
        {
            name: "Sagar", profession: "superhero", age: 98
        },
        {
            name: "Amit", profession: "developer", age: 98
        },
        {
            name: "Rahul", profession: "developer", age: 98
        }
    ]
    return (
        <div>
            {
                items.map(x => <Person name={x.name} profession={x.profession} age={x.age} />)
            }
        </div>
    )
}