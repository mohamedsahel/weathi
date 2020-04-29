import React from 'react'

import { Header, Time } from '@components'

import * as S from './weather-section.styles'

const WeatherSection = () => {
    return (
        <S.Container >
            <Header />
            <Time />
        </S.Container>
    )
}

export default WeatherSection