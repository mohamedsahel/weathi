import React from 'react'

import { TempDegree, WeatherIcon } from "@components";


import * as S from './weather-table.styles'

const WeatherTableRow = (props) => {
    return (
        <S.TableRow {...props}>
            <span>Tur</span>
            <TempDegree value='32' />
            <WeatherIcon icon='01d' />
        </S.TableRow>
    )
}

const WeatherTable = () => {
    return (
        <S.Table >
            <WeatherTableRow selected={true} />
            <WeatherTableRow />
            <WeatherTableRow />
            <WeatherTableRow />
            <WeatherTableRow />
        </S.Table>
    )
}

export default WeatherTable