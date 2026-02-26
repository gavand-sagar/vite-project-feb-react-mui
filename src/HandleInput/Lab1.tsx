import React, { useState } from 'react'

type Props = {}

export default function Lab1({ }: Props) {
    let [username, setUsername] = useState<string>('') //
    let [password, setPassword] = useState<string>('') //
    let [email, setEmail] = useState<string>('') //
    let [city, setCity] = useState<string>('') //

    // function handleUsername(event: any) {
    //     setUsername(event.target.value)
    // }

    // function handlePassword(event: any) {
    //     setPassword(event.target.value)
    // }

    function handleChange(event) {
        if (event.target.name == 'username') {
            setUsername(event.target.value)
        } else if (event.target.name == 'password') {
            setPassword(event.target.value)
        }
    }
    function handleCheckbox(event: any) {
        console.log(event.target.checked)
    }
    return (
        <div>
            <input name='username' placeholder='username' type='text' onChange={handleChange} />
            <br />
            <br />
            <input name='password' placeholder='password' type='text' onChange={handleChange} />
            <br />
            <br />
            <input name='city' placeholder='city' type='text' onChange={handleChange} />
            <br />
            <br />
            <input name='email' placeholder='email' type='text' onChange={handleChange} />
            <br />
            <br />

            <input type='checkbox' onChange={handleCheckbox} />
            <hr />
            username = {username}
            <br />
            <br />
            password = {password}
        </div>
    )
}