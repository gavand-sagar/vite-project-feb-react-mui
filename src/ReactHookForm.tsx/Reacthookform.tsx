import { useEffect } from "react"
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

    // useEffect(() => {
    //     console.log('errors.username', errors.username)
    // }, [errors.username])

    // useEffect(() => {
    //     console.log('errors.password', errors.password)
    // }, [errors.password])

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>

            <input className={errors.username ? "error-box" : ""} {...register('username', {
                required: { value: true, message: "Username is required" },
                minLength: { value: 3, message: 'Minimum 3 letters' },
                maxLength: { value: 30, message: 'Maximum 30 letters' }
            })} />
            <br />
            {errors.username && <span className="error-text">{errors.username.message}</span>}
            <br />
            <input {...register('password', { required: { value: true, message: 'Password is required' } })} />
            <br />
            {errors.password && <span className="error-text">{errors.password.message}</span>}
            <br />
            <input type="submit" />
        </form>
    )
}