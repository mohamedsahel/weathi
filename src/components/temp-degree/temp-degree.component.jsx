import React from 'react'

import * as S from './temp-degree.styles'

const TempDegree = ({ value, ...otherProps }) => {
    return (
        <S.Temp {...otherProps}>
            <S.TempValue>{value}</S.TempValue>
            <S.Degree>&#176;</S.Degree>
        </S.Temp>
    )
}

export default TempDegree