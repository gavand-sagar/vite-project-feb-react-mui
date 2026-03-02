import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeUsernameToSuperman } from '../slices/userSlice'

type Props = {}

export default function SimpleRedux({ }: Props) {
    // slice to fetch data from store

    const { username, email } = useSelector((store: any) => store.users)

    const dispatch = useDispatch()

    function handleChange() {
        // redux function 
        // 'changeUsernameToSuperman'
        // console.log(changeUsernameToSuperman())
        dispatch(changeUsernameToSuperman())
        // dispatch({ type: 'users/changeUsernameToSuperman' })
    }
    return (
        <div>
            <h1>SimpleRedux</h1>
            <button onClick={handleChange}>Change</button>
            <p> Global Username = {username}</p>
            <p> Global Email = {email}</p>
        </div>
    )
}