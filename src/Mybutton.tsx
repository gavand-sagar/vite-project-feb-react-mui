import React, { type ReactNode } from 'react'

type Props = {
    children: ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export default function Mybutton({ children, onClick, onMouseEnter }: Props) {
    if (children == "Save") {
        return (
            <button onClick={onClick} onMouseEnter={onMouseEnter} style={{
                backgroundColor: 'blue',
                color: 'white',
                padding: '10px',
                fontSize: '1.5rem',
                borderRadius: '5px',
                margin: '3px',
                fontWeight: 'bold'
            }}>
                {children}
            </button>
        )
    } else {
        return <></>
    }

}