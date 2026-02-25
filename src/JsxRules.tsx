import React, { useState } from 'react'

type Props = {}

export default function JsxRules({ }: Props) {

    // a normal variable
    //let value = 0;
    let [value, setValue] = useState<number>(0)

    let [flag, setFlag] = useState(true)
    // we need state variable

    function increment() {
        //normal variable updation
        //value = value + 1;

        //state variable updation (re-render)
        setValue(value + 1)
    }

    // to onclick (or any event )
    // we must bind the function ref 
    // (ie. function name only)
    return (
        <fieldset>
            <button onClick={increment}>+</button>
            <p>{value}</p>

        </fieldset>
    )
}