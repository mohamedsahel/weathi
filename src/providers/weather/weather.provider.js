import React from 'react'
import WeatherContext from './weather.context'


import { getCurrentWeather, getDailyForecast, getHourlyForecast } from '@global/utils/weather.utils'

const INITIAL_STATE = {
    address: 'Meknes, Morroco',
    city: '',
    geometry: {
        lat: '20.33',
        lng: '30.68'
    },
    current: {
        temp: 23,
        icon: '04n'
    },
    daily: [
        {
            name: 'mon',
            temp: 27,
            icon: '09n'
        },
        {
            name: 'tur',
            temp: 29,
            icon: '10n'
        }
    ],
    hourly: [
        {
            name: '12',
            temp: 27,
            icon: '11n'
        },
        {
            name: '01',
            temp: 29,
            icon: '10n'
        }
    ],
    isFetching: true,
    error: null
}

const weatherReducer = (state, action) => {
    const { type, payload } = action

    switch(type) {
        case 'START_FETCHING': 
            return {
                ...state,
                isFetching: true
            }
        case 'FETCHING_SUCCESS': 
            return {
                ...state,
                address: payload.address,
                city: payload.city,
                geometry: payload.geometry,
                current: payload.current,
                daily: payload.daily,
                hourly: payload.hourly,
                isFetching: false
            }
        case 'FETCHING_FAILURE': 
            return {
                ...state,
                error: payload,
                isFetching: false
            }
        case 'SET_WEATHER_STATE': 
            return {
                ...state,
                ...payload,
                isFetching: true
            }

        default :
            return state
    }
}

const WeatherProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(weatherReducer, INITIAL_STATE)
    const didUpdate = React.useRef(false)

    const fetchAsync = city => {
        dispatch({
            type: 'START_FETCHING'
        })

        const [lat, lng] = [
            city.geometry.location.lat(),
            city.geometry.location.lng()
        ]
        const API_ID = 'f85c56db4934ed037343aa44f6f01f71'
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude={part}&units=metric&appid=${API_ID}`

        fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: 'FETCHING_SUCCESS',
                    payload: {
                        address: city.formatted_address,
                        city: city.name,
                        geometry: {
                            lat: data.lat,
                            lng: data.lon
                        },
                        current: getCurrentWeather(data.current),
                        daily: getDailyForecast(data.daily),
                        hourly: getHourlyForecast(data.hourly)
                    }
                })

            })
            .catch(error => {
                dispatch({
                    type: 'FETCHING_FAILURE',
                    payload: error.message
                })
            })
    }

    React.useEffect(() => {
        if (didUpdate.current) {
            window.localStorage.setItem('weather', JSON.stringify(state))
        } else didUpdate.current = true
    }, [state])

    return (
        <WeatherContext.Provider value={[state, fetchAsync, dispatch]} >
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider