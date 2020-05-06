import React from 'react'
import FadeIn from 'react-fade-in'

import WeatherContext from '@providers/weather/weather.context'

import { TempDegree } from "@components"


import * as S from './weather-table.styles'

const WeatherTableRow = ({ data:{name, temp, icon}, otherProps }) => {
    return (
        <S.TableRow {...otherProps} >
            <span>{name}</span>
            <TempDegree value={temp} />
            <S._WeatherIcon icon={icon} />
        </S.TableRow>
    )
}

const WeatherTable = ({time='daily'}) => {
    const [state] = React.useContext(WeatherContext)
    const weather = state[time]
    return (
        <S.Table >
            <FadeIn className='fadeIn' >
                {
                    weather.map((data, index) => <WeatherTableRow 
                    key={index}
                    data={data}
                    selected={true} 
                    />)
                }
            </FadeIn>
        </S.Table>
    )
}

export default WeatherTable