import React from 'react'

import { Header, Sammary, WeatherTable } from '@components'

import * as S from './weather-section.styles'

const WeatherSection = () => {
    return (
        <S.Container id='weather-section' >
            <Header />
            <Sammary />
            <WeatherTable />
        </S.Container>
    )
}

export default WeatherSection