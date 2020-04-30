import React from 'react'

import ModeContext from './mode.context'


const ModeProvider = ({children}) => {
    const [mode, setMode] = React.useState(window.localStorage.getItem('mode') || 'light')
    
    const toggleMode = () => {
        if(mode === 'light') {
            window.localStorage.setItem('mode', 'dark')
            setMode('dark')
        }
        else {
            window.localStorage.setItem('mode', 'light')
            setMode('light')
        }
    }

    return (
        <ModeContext.Provider value={[mode, toggleMode]} >
            {children}
        </ModeContext.Provider>
    )
}

export default ModeProvider