import React from 'react'

import * as ICONS from '@icons'

import * as S from './toggler.styles'

const Toggler = ({icon1, icon2, isDefault, onClick, ...otherProps}) => {
    const [Icon1, Icon2] = [ICONS[icon1], ICONS[icon2]]

    return (
        <S.Container 
        {...otherProps} 
        onClick={onClick}
        >
            <S.Scroller isDefault={isDefault} >
                <Icon1 />
                <Icon2 />
            </S.Scroller>
        </S.Container>
    )
}

export default Toggler

