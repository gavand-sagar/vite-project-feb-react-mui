import React, { useReducer, useState } from 'react'

type Props = {}


function reducerFunction(state: any[], action: any) {
    if (action.type == 'reset') {
        return []
    } else if (action.type == 'mark-done') {
        const clonedArray = [...state]
        for (const element of clonedArray) {
            if (element.id == action.payload) {
                element.status = 'done'
            }
        }
        return clonedArray
    } else {
        return state
    }
}

export default function UseReducerCart({ }: Props) {
    const [todosArray, dispatch] = useReducer(reducerFunction, [{
        todo: "Read a book",
        status: 'pending',
        id: 1
    },
    {
        todo: "Go to Gym",
        status: 'pending',
        id: 2
    },
    {
        todo: "Cook",
        status: 'pending',
        id: 3
    }])


    return (
        <div>
            <h1>Todo Items</h1>
            <button onClick={() => dispatch({ type: 'reset' })}>Delete All</button>
            <hr />
            {
                todosArray.map(x =>
                    <fieldset>{x.todo}  {x.status} <button onClick={() => dispatch({ type: 'mark-done', payload: x.id })} >Mark Done</button></fieldset>
                )
            }
        </div >
    )
}



// export default function UseReducerCart({ }: Props) {
//     const [todosArray, setTodosArray] = useState([{
//         todo: "Read a book",
//         status: 'pending',
//         id: 1
//     },
//     {
//         todo: "Go to Gym",
//         status: 'pending',
//         id: 2
//     },
//     {
//         todo: "Cook",
//         status: 'pending',
//         id: 3
//     }])


//     function handleMarkDone(id: number) {
//         const clonedArray = [...todosArray]
//         for (const element of clonedArray) {
//             if(element.id == id){
//                 element.status = 'done'
//             }
//         }
//         setTodosArray(clonedArray)
//     }


//     function handleReset(id: number) {
//         setTodosArray([])
//     }


//     return (
//         <div>
//             <h1>Todo Items</h1>
//             {
//                 todosArray.map(x =>
//                     <fieldset>{x.todo}  {x.status} <button onClick={() => handleMarkDone(x.id)} >Mark Done</button></fieldset>
//                 )
//             }
//         </div >
//     )
// }