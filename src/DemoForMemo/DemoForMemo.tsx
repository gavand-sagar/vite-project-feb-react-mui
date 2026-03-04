import React, { memo, useEffect, useMemo, useState } from "react"

type Props = {}

export function DemoForMemoChild({ }: Props) {
    const [childState, setChildState] = useState(0)
    console.log("Child Rerendered")
    let v = 0;
    for (let i = 0; i < 1000; i++) {
        v++
    }
    console.log("Child Calculated " + v + " times")
    return (
        <div>
            DemoForMemo {v}
            <h1>Child {childState} <button onClick={() => setChildState(childState + 1)}>INC</button></h1>

        </div>
    )
}

const MemoizedChild = memo(DemoForMemoChild)

type ParentProps = {}

export default function DemoForMemo({ }: ParentProps) {
    const [ParentState1, setParentState1] = useState(0)

    const [ParentState2, setParentState2] = useState(0)


    const BetterChild = useMemo(() => <DemoForMemoChild />, [ParentState2]);

    return (
        <div>
            <h1>DemoForMemo </h1>
            <h1>ParentState1 {ParentState1} <button onClick={() => setParentState1(ParentState1 + 1)}>INC</button></h1>
            <h1>ParentState2 {ParentState2} <button onClick={() => setParentState2(ParentState2 + 1)}>INC</button></h1>
            {BetterChild}
            {/* <DemoForMemoChild/> */}
        </div>
    )
}