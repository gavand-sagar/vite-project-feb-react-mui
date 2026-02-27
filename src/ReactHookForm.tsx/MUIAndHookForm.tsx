import { Button, CircularProgress, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

type Props = {}



type Inputs = {
    username: string
    password: string
}


export default function MUIAndHookForm({ }: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const param = useParams()

    const onSubmit = (data: any) => {
        // json data
        // api call also
        console.log(data)
    }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            {JSON.stringify(param)}
            <hr />
            <TextField label="Username" {...register('username', {
                required: { value: true, message: "Username is required" },
                minLength: { value: 3, message: 'Minimum 3 letters' },
                maxLength: { value: 30, message: 'Maximum 30 letters' }
            })} helperText={errors.username?.message} error={Boolean(errors.username)} />
            <br />
            <br />
            <TextField error={Boolean(errors.password)} helperText={errors.password?.message} label="Password" {...register('password', { required: { value: true, message: 'Password is required' } })} />
            <br />
            <br />
            <Button type="submit" variant="contained">Submit</Button>
        </form>
    )
}