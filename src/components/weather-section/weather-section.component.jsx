import React from 'react'

import { Header, Sammary, Tabs, ModeToggler } from '@components'

import * as S from './weather-section.styles'

const WeatherSection = () => {
    return (
        <S.Container id='weather-section' >
            <Header />
            <Sammary />
            <Tabs />
            <ModeToggler />
        </S.Container>
    )
}

export default WeatherSection