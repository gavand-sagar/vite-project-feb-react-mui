import React, { createContext, useContext, useState } from 'react'
import { MyContext } from '../data/context'





export function PropDrillD() {
    const { value, setValue } = useContext(MyContext)
    return (
        <fieldset>
            <legend>THIS IS D {value}</legend>
            <button onClick={() => setValue(value + 1)}>CHANGE</button>
        </fieldset>
    )
}

export function PropDrillC() {
    return (
        <fieldset>
            <legend>THIS IS C </legend>
            <PropDrillD />
        </fieldset>
    )
}

export function PropDrillB() {
    const { value, setValue } = useContext(MyContext)
    return (
        <fieldset>
            <legend>THIS IS B {value}</legend>
            <PropDrillC />
        </fieldset>
    )
}

export default function PropDrillA() {
    const [value, setValue] = useState<number>(0)
    return (
        <fieldset>
            <legend>THIS IS A - {value}</legend>
            <MyContext.Provider value={{ value, setValue }}>
                <PropDrillB />
            </MyContext.Provider>
        </fieldset>
    )
}