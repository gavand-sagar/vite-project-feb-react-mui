import { Button, CircularProgress, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

type Props = {}

export default function Tanstack({ }: Props) {
    const { isFetching, error, data, refetch } = useQuery({
        queryKey: ['repoData'], // unique id for the api call
        queryFn: () =>
            fetch('https://catfact.ninja/fact').then((res) =>
                res.json(),
            ),
    })


    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <Button onClick={() => refetch()}>Refetch</Button>
            <hr />
            {
                isFetching ?
                    <CircularProgress></CircularProgress>
                    :
                    <Typography>{data.fact}</Typography>
            }
        </div>
    )
}