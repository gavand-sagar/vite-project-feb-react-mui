import { Button, CircularProgress, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import axios from 'axios'
import { getUserWithUserIdParam } from './api-service'

type Props = {}


export default function TanstackWithParam({ }: Props) {
    const [userId, setUserId] = useState(1)
    const { isFetching, error, data, refetch } = useQuery({
        queryKey: [userId, 'users'], // unique id for the api call
        queryFn: getUserWithUserIdParam
    })


    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <Button onClick={() => setUserId(userId + 1)}>Inc {userId}</Button>
            <Button onClick={() => refetch()}>Refetch</Button>
            <hr />
            {
                isFetching ?
                    <CircularProgress></CircularProgress>
                    :
                    <Typography>{data.firstName}</Typography>
            }
        </div>
    )
}