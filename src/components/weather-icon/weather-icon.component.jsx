import React from 'react'
import * as ICONS from '@icons'

const WEATHER_ICONS = {
    '01d': ICONS['Icon_01d'],
    '02d': ICONS['Icon_02d'],
    '03d': ICONS['Icon_03d'],
    '04d': ICONS['Icon_04d'],
    '09d': ICONS['Icon_09d'],
    '10d': ICONS['Icon_10d'],
    '11d': ICONS['Icon_11d'],
    '13d': ICONS['Icon_13d'],
    '50d': ICONS['Icon_50d'],
    '01n': ICONS['Icon_01n'],
    '02n': ICONS['Icon_02n'],
    '03n': ICONS['Icon_03d'],
    '04n': ICONS['Icon_04d'],
    '09n': ICONS['Icon_09d'],
    '10n': ICONS['Icon_10n'],
    '11n': ICONS['Icon_11d'],
    '13n': ICONS['Icon_13d'],
    '50n': ICONS['Icon_50d']
}

const WeatherIcon = ({ icon, ...otherProps }) => {
    const WeatherIcon = WEATHER_ICONS[icon]
    return(
        <WeatherIcon {...otherProps} />
    )
}

export default WeatherIcon