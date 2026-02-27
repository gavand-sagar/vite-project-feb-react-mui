import { Button, CircularProgress, Rating, TextField } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

type Props = {}



type Inputs = {
    bookName: string
    author: string
    rating: number
}


export default function CustomComponentWithHookForm({ }: Props) {
    const { register, handleSubmit, formState: { errors }, control } = useForm<Inputs>()

    const onSubmit = (data: any) => {
        // json data
        // api call also
        console.log(data)
    }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>

            <TextField label="Book Name" {...register('bookName', {
                required: { value: true, message: "Name is required" },
                minLength: { value: 3, message: 'Minimum 3 letters' },
                maxLength: { value: 30, message: 'Maximum 30 letters' }
            })} helperText={errors.bookName?.message} error={Boolean(errors.bookName)} />
            <br />
            <br />
            <TextField error={Boolean(errors.author)} helperText={errors.author?.message} label="Author" {...register('author', { required: { value: true, message: 'Author is required' } })} />
            <br />
            <br />
            <Controller
                control={control}
                name="rating"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Rating onChange={onChange} value={value} />
                )}
            />
            <br />
            <br />
            <Button type="submit" variant="contained">Submit</Button>
        </form>
    )
}