import React from 'react'

import WeatherContext from '@providers/weather/weather.context'
import MapContext from '@providers/map/map.context'

import { MapToggler, ModeToggler } from '@components'

import * as S from './mainpage.styles'

const MainPage = () => {
    const [mapInTop, setMapInTop] = React.useState(false)
    const [weather, fetchAsync, dispatch] = React.useContext(WeatherContext)
    const map = React.useContext(MapContext)

    React.useEffect(() => {
        if(map) {
            const weatherStorage = window.localStorage.getItem('weather')
            if(weatherStorage) {
                dispatch({
                    type: 'SET_WEATHER_STATE',
                    payload: JSON.parse(weatherStorage)
                })

            } else {
                const geocoder = new window.google.maps.Geocoder

                navigator.permissions.query({name:'geolocation'})
                .then(res => {
                    if(res.state === 'denied') {
                        alert('Please, allow the location to see the weather in your city')
                    }
                    else {
                        
                        navigator.geolocation.getCurrentPosition(position => {
                            const latLng = {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude
                            }
            
                            geocoder.geocode({'location': latLng}, (results, status) => {
                                const place = results[1]
                                place.name = place.address_components[0].long_name
                                fetchAsync(place)
            
                            })
                        })
                    }
                })

            }
        }
    }, [map])

    return (
        <S.Container>
            <S._MapSection 
            intop={mapInTop}
            />
            <S._WeatherSection />

            <S.TogglersContainer>
                <ModeToggler />
                <MapToggler 
                 onClick={() => setMapInTop(s => !s)}
                 isDefault={!mapInTop}
                />
               
            </S.TogglersContainer>
        </S.Container>
    )
}

export default MainPage