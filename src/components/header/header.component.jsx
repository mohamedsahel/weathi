import React from 'react'

import { SearchBar } from '@components'

import * as S from './header.styles'

const CurrentLocation = ({ location }) => (
    <S.LocationContainer>
        <S._LocationMarker />
        <S.LocationTitle> {location} </S.LocationTitle>
    </S.LocationContainer>
)

const Header = () => {
    return (
        <S.Container >
            <SearchBar/>
            <CurrentLocation location='Paris, Frensh' />
        </S.Container>
    )
}

export default Header