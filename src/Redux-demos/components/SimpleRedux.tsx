import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeUsernameToSuperman } from '../slices/userSlice'
import { Button, TextField } from '@mui/material'
import { addNewCategory, removeLastCategory } from '../slices/categoriesSlice'

type Props = {}

export default function SimpleRedux({ }: Props) {
    // slice to fetch data from store

    const { username, email } = useSelector((store: any) => store.users)
    const [value, setValue] = useState('')
    const { items } = useSelector((store: any) => store.categories)
    const dispatch = useDispatch()

    function handleChange() {
        // redux function 
        // 'changeUsernameToSuperman'
        // console.log(changeUsernameToSuperman())
        dispatch(changeUsernameToSuperman())
        // dispatch({ type: 'users/changeUsernameToSuperman' })
    }

    function popCategory() {
        dispatch(removeLastCategory())
    }

    function pushCategory() {
        dispatch(addNewCategory(value))
    }

    return (
        <div>
            <h1>SimpleRedux</h1>
            <button onClick={handleChange}>Change</button>
            <p> Global Username = {username}</p>
            <p> Global Email = {email}</p>

            <hr />
            <div>
                <Button variant='contained'>Clear</Button>
            </div>
            <div>
                <Button variant='contained' onClick={popCategory}>Pop</Button>
            </div>
            <div>
                <TextField onChange={e => setValue(e.target.value)} label='Value'></TextField>  <Button variant='contained' onClick={pushCategory}>Push</Button>
            </div>
            {
                items?.map((x: any) => <p>{x}</p>)
            }
        </div>
    )
}