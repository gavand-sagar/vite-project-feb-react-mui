import React, { useEffect, useReducer, useState } from 'react'
import Mybutton from '../Mybutton'

type Props = {}

function reducerFunction(prev_state: any, action: any): number {
    // how to actually 
    if (action.type == 'inc') { // inc is an event (action)
        return prev_state + 1   // this is actual data manipulation
    } else if (action.type == 'dec') {
        return prev_state - 1
    } else if (action.type == 'reset') {
        return 0
    } else {
        return prev_state
    }
}

export default function UseReducerDemo({ }: Props) {

    const [value, dispatch] = useReducer(reducerFunction, 0)

    const [counter, setState] = useState(0)

    // useEffect(() => {
    //     if (Math.random() > 0.5) {
    //         throw Error("test error")
    //     }
    // }, [])

    return (
        <div>
            <h1>UseReducerDemo</h1>

            <Mybutton onClick={() => console.log('clicked')}>Save</Mybutton>
            <Mybutton onMouseEnter={()=> console.log("Hover")}>Save</Mybutton>
            <Mybutton>Update</Mybutton>
            <Mybutton>
                <h1>Hey</h1>
            </Mybutton>

            {/* value : {value}
            <br />
            <br />
            <button onClick={() => dispatch({ type: 'inc' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'dec' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

            <button onClick={() => setState(value + 10)}>Inc</button> */}
        </div>
    )
}