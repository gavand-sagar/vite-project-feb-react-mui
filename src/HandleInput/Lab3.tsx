import React, { useRef, useState } from 'react'

type Props = {}

export default function Lab3({ }: Props) {
    let refObject = useRef(0);

    let [value, setValue] = useState(0)                

    let normalVariable = 0  /// not good at all

    function RefChange() {
        normalVariable = normalVariable + 1;
        refObject.current = refObject.current + 1;
    }
    function StateChange() {
        normalVariable = normalVariable + 1;
        setValue(value + 1)
    }

    console.log("re-rendered")
    console.log("normalVariable", normalVariable)
    console.log("refObject.current", refObject.current)
    console.log("State", value)

    return (
        <div>
            <h1>Lab3</h1>
            Normal : {normalVariable}
            <br />
            refObject : {refObject.current}
            <br />
            state : {value}
            <br />
            <button onClick={RefChange}>Ref Change</button>
            <button onClick={StateChange}>State Change</button>
        </div>
    )
}