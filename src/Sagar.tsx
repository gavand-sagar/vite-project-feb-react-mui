import type { propType } from "./util"

export default function Sagar() {
    return <h1>Sagar Gavand</h1>
}

export function Sachin() {
    return <h1>Sachin Tendulkar</h1>
}


export function Person({ name, profession, age }: propType) {
    return (
        <fieldset>
            <h3>Hi I am {name.toUpperCase()}</h3>
            I am a {profession} 💻.
            {age != null && <p>I am {age} years old</p>}
        </fieldset>
    )
}