import { useForm } from "react-hook-form"


type Inputs = {
    username: string
    password: string
}

export default function ReactHookForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const onSubmit = (data: any) => {
        // json data
        // api call also
        console.log(data)
    }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register('username', { required: true })} />
            <br />
            {errors.username && <span>Username Required</span>}
            <br />
            <input {...register('password', { required: true })} />
            <br />
            {errors.password && <span>Password Required</span>}
            <br />
            <input type="submit" />
        </form>
    )
}