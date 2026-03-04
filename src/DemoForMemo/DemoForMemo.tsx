import React, { useState } from "react"

type Props = {}

export function DemoForMemoChild({ }: Props) {
    console.log("Child Rerendered")
    let v = 0;
    for (let i = 0; i < 1000; i++) {
        v++
    }
    console.log("Child Calculated " + v + " times")
    return (
        <div>DemoForMemo {v}</div>
    )
}

const BetterChild = React.memo(DemoForMemoChild)

type ParentProps = {}

export default function DemoForMemo({ }: ParentProps) {
    const [ParentState, setParentState] = useState(0)
    console.log("Parent Re-rendered")
    return (
        <div>
            <h1>DemoForMemo {ParentState}</h1>
            <button onClick={() => setParentState(ParentState + 1)}>INC Parent</button>
            <BetterChild />
        </div>
    )
}