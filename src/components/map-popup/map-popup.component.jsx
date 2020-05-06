import React from 'react'

import MapContext from '@providers/map/map.context'

import { MapPopupContainer  } from '@components'

import * as S from './map-popup.styles'

const MapPopup = ({temp, city, icon, selected, lat, lng, ...props}) => {
    const map = React.useContext(MapContext)

    React.useEffect(() => {
        if(selected && map) {
            map.panTo({lat: +lat, lng: +lng})
        }
    }, [lat, lng, map])

    return (
        <MapPopupContainer 
            {...props} 
            lat={lat}
            lng={lng}
            anchorColor={selected && 'rgb(33, 43, 91)'} 
            >
            <S.Container selected={selected} >
                <S._TempDegree value={temp} />
                <S.CityName>{city}</S.CityName>
                <S._WeatherIcon icon={icon} selected={selected} />
            </S.Container>
        </MapPopupContainer>
    )
}

export default MapPopup