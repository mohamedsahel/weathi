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
            const geocoder = new window.google.maps.Geocoder

            const fetchByLatLng = latLng => {
                geocoder.geocode(
                    {'location': latLng}, 
                    (results, status) => {
                        const place = results[1]
                        place.name = place.address_components[0].long_name
                        fetchAsync(place)
                    }
                )
            }

            navigator.permissions.query({name:'geolocation'})
            .then(res => {
                if(res.state === 'denied') {
                    fetch('http://ip-api.com/json')
                    .then(res => res.json())
                    .then(data => {
                        fetchByLatLng({
                            lat: data.lat,
                            lng: data.lon
                        })
                    })
                }
                else {
                    
                    navigator.geolocation.getCurrentPosition(position => {
                        const latLng = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                        
                        fetchByLatLng(latLng)
                    })
                }
            })

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