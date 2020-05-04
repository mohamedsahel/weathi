import React from 'react'

import { MapPopupContainer  } from '@components'

import * as S from './map-popup.styles'

const MapPopup = (props) => {
    return (
        <MapPopupContainer {...props}  >
            <S.Container>
                <S._TempDegree value='20' />
                <S.CityName>Paris</S.CityName>
                <S._WeatherIcon icon='01n' />
            </S.Container>
        </MapPopupContainer>
    )
}

export default MapPopup