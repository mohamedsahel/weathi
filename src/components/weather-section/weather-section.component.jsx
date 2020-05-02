import React from 'react'

import { Header, Sammary, Tabs } from '@components'

import * as S from './weather-section.styles'

const WeatherSection = (props) => {
    return (
        <S.Container id='weather-section' {...props} >
            <Header />
            <Sammary />
            <Tabs />
        </S.Container>
    )
}

export default WeatherSection