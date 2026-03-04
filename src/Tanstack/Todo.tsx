import { CircularProgress, Pagination } from '@mui/material'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

type Props = {}

type TodoType = {
    title: string;
    description: string;
    dueDate: string
}

export default function Todo({ }: Props) {
    // const [todos, setTodos] = useState<any>(null)
    // useEffect(() => {
    //     axios.get("/api/todos")
    //         .then(x => {
    //             setTodos(x.data)
    //         })
    // }, [])

    const queryClient = useQueryClient();
    const [page, setPage] = useState<number>(1)
    const { handleSubmit, register } = useForm<TodoType>()
    const { data: todos, isFetching, refetch } = useQuery({
        queryKey: ['todos', page],
        staleTime: 10000,
        queryFn: () => axios.get("/api/todos?page=" + page)
            .then(x => x.data)
    })

    function addTodo({ title, description, dueDate }: TodoType) {
        return axios.post('/api/todos', { title, description, dueDate })
    }

    const { mutate, isPending } = useMutation({
        mutationFn: addTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        }
    })

    function mySubmit(data: TodoType) {
        mutate(data)
    }

    return (
        <div>

            <form onSubmit={handleSubmit(mySubmit)}>
                <div>
                    <input placeholder='title' {...register('title')} />
                </div>
                <div>
                    <input placeholder='description' {...register('description')} />
                </div>
                <div>
                    <input placeholder='dueDate' {...register('dueDate')} type='date' />
                </div>
                <button disabled={isPending} type='submit'>Save Todo</button>
            </form>

            <button disabled={isPending} onClick={() => refetch()}>Refetch</button>
            <hr />
            <Pagination count={todos?.totalPages}  page={page} onChange={(_e, v) => setPage(v)}></Pagination>
            {/* <button disabled={page == 1} onClick={() => setPage(page - 1)}>Prev</button>
            {page}
            <button disabled={todos && page == todos.totalPages} onClick={() => setPage(page + 1)}>Next</button> */}
            <hr />
            {
                isFetching ? <CircularProgress />
                    :
                    todos?.items.map((x: any) => <fieldset>
                        {x.title}
                    </fieldset>
                    )
            }
        </div>
    )
}