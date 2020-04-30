import React from 'react'

import * as S from './city-card.styles'

const CityCard = ({city:{imageUrl, name}, ...otherProps}) => {
    return (
        <S.Container {...otherProps} cityImage={imageUrl} >
            <S._WeatherIcon icon='13d' />
            <span>{name}</span>
        </S.Container>
    )
}

export default CityCard