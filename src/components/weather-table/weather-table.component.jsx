import React from 'react'
import FadeIn from 'react-fade-in'


import { TempDegree } from "@components"

import * as S from './weather-table.styles'

const WeatherTableColumn = ({ data:{name, temp, icon}, ...otherProps }) => {
    return (
        <S.TableColumn {...otherProps} >
            <span>{name}</span>
            <TempDegree value={temp} />
            <S._WeatherIcon icon={icon} />
        </S.TableColumn>
    )
}

const WeatherTable = ({weather}) => {
    return (
        <S.Table >
            <FadeIn className='fadeIn' >
                {
                    weather.map((data, index) => <WeatherTableColumn 
                            key={index}
                            data={data}
                            selected={index === 0}
                        />
                    )
                }
            </FadeIn>
        </S.Table>
    )
}

export default WeatherTable