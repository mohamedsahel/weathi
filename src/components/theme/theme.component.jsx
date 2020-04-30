import React from 'react'
import { ThemeProvider } from 'styled-components'

import ModeContext from '../../providers/mode/mode.context'
import { lightTheme, darkTheme } from '../../global/data/theme'

const Theme = ({ children }) => {
    const [mode] = React.useContext(ModeContext)
    console.log(mode)
    return (
        <ThemeProvider 
        theme={mode === 'light' ? lightTheme : darkTheme} > 
                { children } 
        </ThemeProvider>
    )
}

export default Theme