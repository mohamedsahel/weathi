import React from 'react'

import ModeContext from '@providers/mode/mode.context'

import * as S from './mode-toggler.styles'

const ModeToggler = props => {
    const [mode, toggleMode] = React.useContext(ModeContext)
    return (
        <S._Toggler 
        {...props}
        icon1='SunIcon'
        icon2='MoonIcon'
        onClick={toggleMode}
        isDefault={mode === 'light'}
        />
    )
}


export default ModeToggler