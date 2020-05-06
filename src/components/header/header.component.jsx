import React from 'react'

import WeatherContext from '@providers/weather/weather.context'

import { SearchBar } from '@components'

import * as S from './header.styles'

const CurrentLocation = ({ location }) => (
    <S.LocationContainer>
        <S._LocationMarker />
        <S.LocationTitle> {location} </S.LocationTitle>
    </S.LocationContainer>
)

const Header = () => {
    const [state] = React.useContext(WeatherContext)
    const location = state.address
    return (
        <S.Container >
            <SearchBar/>
            <CurrentLocation location={location} />
        </S.Container>
    )
}

export default Header