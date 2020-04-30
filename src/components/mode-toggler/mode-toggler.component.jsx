import React from 'react'

import ModeContext from '../../providers/mode/mode.context'

import { SunIcon, MoonIcon } from '@icons'

import * as S from './mode-toggler.styles'

const ModeToggler = props => {
    const [mode, toggleMode] = React.useContext(ModeContext)
    return (
        <S.Container 
        {...props} 
        onClick={toggleMode}
        >
            <S.Scroller mode={mode} >
                <SunIcon />
                <MoonIcon />
            </S.Scroller>
        </S.Container>
    )
}


export default ModeToggler