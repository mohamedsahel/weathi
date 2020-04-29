import React from 'react'

import { TempDegree } from '@components'

import * as S from './sammary.styles'

const Sammary = () => {
    return (
        <S.Container >
            <S._Time />
            <S._WeatherIcon icon='01d' />
            <TempDegree value='20' size='14rem' />
        </S.Container>
    )
}

export default Sammary