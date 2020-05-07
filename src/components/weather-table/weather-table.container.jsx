import React from 'react'

import WeatherContext from '@providers/weather/weather.context'

import WeatherTable from './weather-table.component'
import TableLoader from './weather-table.palceholder'

const WeatherTableContainer = ({time='daily'}) => {
    const [state] = React.useContext(WeatherContext)
    const weather = state[time]

    return state.isFetching ? <TableLoader />
    : <WeatherTable weather={weather} />
}

export default WeatherTableContainer