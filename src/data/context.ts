import { createContext } from "react";

type Props = {
    value: number,
    setValue: (x: number) => void
}

export const MyContext = createContext<Props | null>(null)
