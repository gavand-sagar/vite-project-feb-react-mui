import React from 'react'
import { useSelector } from 'react-redux'

type Props = {}

export default function SimpleRedux2({ }: Props) {
    const { username, email } = useSelector((store: any) => store.users)
    return (
        <div>
            <h1>SimpleRedux 2</h1>
            <p> Global Username = {username}</p>
            <p> Global Email = {email}</p>
        </div>
    )
}