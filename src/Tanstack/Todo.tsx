import { CircularProgress } from '@mui/material'
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

    const { handleSubmit, register } = useForm<TodoType>()
    const { data: todos, isFetching, refetch } = useQuery({
        queryKey: ['todos'],
        queryFn: () => axios.get("/api/todos")
            .then(x => x.data)
    })

    function addTodo({ title, description, dueDate }: TodoType) {
        return axios.post('/api/todos', { title, description, dueDate })
    }

    const createTodoMutation = useMutation({
        mutationFn: addTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        }
    })

    function mySubmit(data: TodoType) {
        createTodoMutation.mutate(data)
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
                <button type='submit'>Save Todo</button>
            </form>

            <button onClick={() => refetch()}>Refetch</button>

            <hr />
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