import { useState } from 'react'


export default function useMode() {
    const [mode, setMode] = useState(window.localStorage.getItem('mode') || 'light')

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

    return [mode, toggleMode]
}