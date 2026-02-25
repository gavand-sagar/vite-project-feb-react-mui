import React, { useEffect } from 'react'

type Props = {}

export default function UseEffectForCleanup({ }: Props) {

    useEffect(() => {
        const i = setInterval(() => {
            console.log('tick')
        }, 1000)


        return () => {
            // clean up code
            // this will be executed at the time of 
            // component destroy
            // note: it will not destory the component
            // it will just execute extra logic 

            clearInterval(i)
        }
    }, [])
    return (
        <div>
            Timer Componenent Loaded
        </div>
    )
}