import React from 'react'
import { ThemeProvider } from 'styled-components'

import { useMode } from '@hooks'
import { lightTheme, darkTheme } from '../../global/data/theme'

const Theme = ({ children }) => {
    const [mode] = useMode()
    return (
        <ThemeProvider 
        theme={mode === 'light' ? lightTheme : darkTheme} > 
            { children } 
        </ThemeProvider>
    )
}

export default Theme