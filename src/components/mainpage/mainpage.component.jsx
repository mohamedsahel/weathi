import React from 'react'

import { MapSection, WeatherSection } from '@components'

import * as S from './mainpage.styles'

const MainPage = () => {
    return (
        <S.Container>
            <WeatherSection />
            <MapSection />
        </S.Container>
    )
}

export default MainPage