import React, { useEffect, useState } from 'react'

type Props = {}

export default function Lab2({ }: Props) {
    let [formObj, setFormObj] = useState<any>({
        username: '',
        password: '',
        email: '',
        city: '',
        isAgreed: false,
        dob: ''
    })

    useEffect(() => {
        console.log("formObj changed")
    }, [formObj])

    useEffect(() => {
        console.log("username changed")
    }, [formObj.username])

    function handleChange(event: any) {
        // need duplicate of object
        const duplicate = {
            ...formObj
        }

        duplicate[event.target.name] = event.target.value;

        setFormObj(duplicate)
    }
    function handleCheckbox(event: any) {
        // need duplicate of object
        const duplicate = {
            ...formObj
        }

        duplicate[event.target.name] = event.target.checked;

        setFormObj(duplicate)
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
            <input name='dob' placeholder='dob' type='date' onChange={handleChange} />
            <br />
            <br />
            <label>I agree</label>
            <input name='isAgreed' type='checkbox' onChange={handleCheckbox} />
            <hr />
            {
                JSON.stringify(formObj)
            }
        </div>
    )
}