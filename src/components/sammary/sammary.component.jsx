import React from 'react'

import WeatherContext from '@providers/weather/weather.context'

import { TempDegree } from '@components'

import * as S from './sammary.styles'

const Sammary = () => {
    const [state] = React.useContext(WeatherContext)
    return (
        <S.Container >
            <S._Time />
            <S._WeatherIcon icon={state.current.icon} />
            <TempDegree value={state.current.temp} size='14rem' />
        </S.Container>
    )
}

export default Sammary