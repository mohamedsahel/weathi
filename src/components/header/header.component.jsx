import React from 'react'

import { SearchBar } from '@components'

import { useElementSize } from '@hooks'

import * as S from './header.styles'

const CurrentLocation = ({ location }) => (
    <S.LocationContainer>
        <S._LocationMarker />
        <S.LocationTitle> {location} </S.LocationTitle>
    </S.LocationContainer>
)

const Header = () => {
    const ref = React.useRef()
    const {width} = useElementSize(ref)

    return (
        <S.Container ref={ref} >
            <SearchBar parentWidth={width} />
            <CurrentLocation location='Paris, Frensh' />
        </S.Container>
    )
}

export default Header