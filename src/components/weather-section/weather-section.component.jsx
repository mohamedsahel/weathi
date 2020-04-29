import React from 'react'

import { Header, Sammary } from '@components'

import * as S from './weather-section.styles'

const WeatherSection = () => {
    return (
        <S.Container id='weather-section' >
            <Header />
            <Sammary />
        </S.Container>
    )
}

export default WeatherSection