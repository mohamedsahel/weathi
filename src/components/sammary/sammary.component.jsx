import React from 'react'

import * as S from './sammary.styles'

const Sammary = () => {
    return (
        <S.Container >
            <S._Time />
            <S._WeatherIcon icon='01d' />
            <S.Temp>
                20<S.Degree>&#176;</S.Degree>
            </S.Temp>
        </S.Container>
    )
}

export default Sammary