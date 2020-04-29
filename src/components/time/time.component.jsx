import React from 'react'

import { useDate } from '@hooks'

import * as S from './time.styles'

const Time = (props) => {
    const {hours, minutes, day, dayNumber, month} = useDate(1000)
    return (
        <S.Container {...props}>
            <S.Time>
                {hours} : {minutes}
            </S.Time>
            <S.Date>
                {day}, {dayNumber} {month}
            </S.Date>
        </S.Container>
    )
}

export default Time