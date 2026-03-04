import React, { useMemo, useState } from 'react'

type Props = {}

export default function UseMemoValues({ }: Props) {
    const [value, setValue] = useState(0)
    const [toggle, setToggle] = useState(true)

    const normalValue = () => {
        // api call that take time
        let a = ''
        for (let index = 0; index < 20000; index++) {
            a += index
            console.log(a)
        }
        return value * value
    }

    return (
        <div>
            <h1>UseMemoValues</h1>
            <button onClick={() => setToggle(!toggle)}>{toggle ? "HIDE" : "SHOW"}</button>
            <button onClick={() => setValue(value + 1)}>Inc</button>
            <h1> {value} - {normalValue()}</h1>
        </div>
    )
}

// export default function UseMemoValues({ }: Props) {
//     const [value, setValue] = useState(0)
//     const [toggle, setToggle] = useState(true)

//     const memoizedValue = useMemo(() => {
//         // api call that take time
//         let a = ''
//         for (let index = 0; index < 20000; index++) {
//             a += index
//             console.log(a)
//         }
//         return value * value
//     }, [value])

//     return (
//         <div>
//             <h1>UseMemoValues</h1>
//             <button onClick={() => setToggle(!toggle)}>{toggle ? "HIDE" : "SHOW"}</button>
//             <button onClick={() => setValue(value + 1)}>Inc</button>
//             <h1> {value} - {memoizedValue}</h1>
//         </div>
//     )
// }