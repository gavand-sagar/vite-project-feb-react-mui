import React, { useEffect, useRef, useState } from 'react'

type Props = {}

export default function Lab4({ }: Props) {
    let refObject = useRef(null);

    function handleSubmit() {
        console.log(refObject?.current?.value)
    }

    return (
        <div>
            <h1>Lab4</h1>
            <br />
            <input ref={refObject}></input>
            <button onClick={handleSubmit}>Ref Change</button>
        </div>
    )
}