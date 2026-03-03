import { CircularProgress } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

type Props = {}

export default function Todo({ }: Props) {
    // const [todos, setTodos] = useState<any>(null)
    // useEffect(() => {
    //     axios.get("/api/todos")
    //         .then(x => {
    //             setTodos(x.data)
    //         })
    // }, [])

    const { data: todos, isFetching } = useQuery({
        queryKey: ['todos'],
        queryFn: () => axios.get("/api/todos")
            .then(x => x.data)
    })

    return (
        <div>
            {
                isFetching ? <CircularProgress />
                    :
                    todos?.items.map((x: any) => <fieldset>
                        <h1>{x.title}</h1>
                        <p> {x.description}</p>
                    </fieldset>
                    )
            }
        </div>
    )
}