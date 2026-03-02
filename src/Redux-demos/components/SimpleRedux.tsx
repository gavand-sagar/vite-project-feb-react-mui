import React from 'react'
import { useSelector } from 'react-redux'

type Props = {}

export default function SimpleRedux({ }: Props) {
    // slice to fetch data from store

    const { username, email } = useSelector((store: any) => store.users)

    return (
        <div>
            <h1>SimpleRedux</h1>
            <p> Global Username = {username}</p>
            <p> Global Email = {email}</p>
        </div>
    )
}