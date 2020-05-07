import React from 'react'

import WeatherContext from '@providers/weather/weather.context'

import { Map, MapPopup } from '@components'

import * as S from './map-section.styles'

const MapSection = (props) => {
    const [weather] = React.useContext(WeatherContext)
    return (
    <S.Container  {...props} >
        <Map />
        <MapPopup 
        lat={weather.geometry.lat} 
        lng={weather.geometry.lng} 
        temp={weather.current.temp}
        city={weather.city}
        icon={weather.current.icon}
        selected={true}
        />
    </S.Container>
)
}

export default MapSection