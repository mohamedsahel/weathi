import React from 'react'

import { Header, Sammary, Tabs } from '@components'

import * as S from './weather-section.styles'

const WeatherSection = () => {
    return (
        <S.Container id='weather-section' >
            <Header />
            <Sammary />
            <Tabs />
        </S.Container>
    )
}

export default WeatherSection