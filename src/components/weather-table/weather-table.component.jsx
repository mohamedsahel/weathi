import React from 'react'
import FadeIn from 'react-fade-in'

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
            <FadeIn>
                <WeatherTableRow selected={true} />
                <WeatherTableRow />
                <WeatherTableRow />
                <WeatherTableRow />
                <WeatherTableRow />
            </FadeIn>
        </S.Table>
    )
}

export default WeatherTable