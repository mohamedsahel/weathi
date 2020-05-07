import React from 'react'

import WeatherContext from '@providers/weather/weather.context'

import CurrentLocationLoader from './header.placeholder'
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
            {
                state.isFetching ? <CurrentLocationLoader />
                : <CurrentLocation location={location} />
            }
            
        </S.Container>
    )
}

export default Header