import { Button, CircularProgress, createTheme, Slider, Switch, TextField, ThemeProvider } from '@mui/material'
import { blue, green, lime, purple, grey } from '@mui/material/colors';
import React, { useState } from 'react'

type Props = {}

const lightMode = createTheme({
    palette: {
        primary: blue,
    },
});


const darkMode = createTheme({
    palette: {
        primary: green,
    },
});


export default function MuiTheme({ }: Props) {

    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <div>
            <h1>Mui Theme demo <Switch onChange={() => setIsDarkMode(!isDarkMode)} /> </h1>
            <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
                <Button color='primary' variant="contained">Primary</Button>
                <TextField label={'some input'} color='primary' variant="outlined" />
                <CircularProgress />

                <Slider defaultValue={30} />
            </ThemeProvider>
        </div>
    )
}