import React from 'react'
import FadeIn from 'react-fade-in'

import { TempDegree } from "@components";


import * as S from './weather-table.styles'

const WeatherTableRow = (props) => {
    return (
        <S.TableRow {...props}>
            <span>Tur</span>
            <TempDegree value='32' />
            <S._WeatherIcon icon='02d' />
        </S.TableRow>
    )
}

const WeatherTable = () => {
    return (
        <S.Table >
            <FadeIn className='fadeIn' >
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