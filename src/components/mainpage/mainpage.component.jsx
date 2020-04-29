import React from 'react'

import { MapSection, WeatherSection } from '@components'

import * as S from './mainpage.styles'

const MainPage = () => {
    return (
        <S.Container>
            <MapSection className='map-section' />
            <WeatherSection className='weather-section' />
        </S.Container>
    )
}

export default MainPage