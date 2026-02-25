import React, { useEffect, useState } from 'react'

type Props = {
    title: string
}

export default function Panel({ title }: Props) {
    let [flag, setFlag] = useState<boolean>(true)

    return (
        <fieldset>
            <h3 onClick={() => setFlag(!flag)}>{title}</h3>
            <p className={flag == true ? 'show' : 'hide'}>
                Lorem ipsum dolor sit amet consectetur
                adipisicingelit. Animi, ullam odio,
                nobis molestias praesentium, itaque
                ipsam perspiciatis sed architecto
                deleniti hic accusantium dolores
                adipisci aliquam distinctio ipsum
                modi iure inventore!</p>
        </fieldset>
    )
}