import React from 'react'

import { useTime } from '@hooks'

import TimeLoader from './time.placeholder'

import * as S from './time.styles'

const Time = (props) => {
    const {hours, minutes, day, dayNumber, month} = useTime(1000)

    return (
    <S.Container {...props}>
        {
            !hours ? <TimeLoader />
            : <>
            <S.Time>
                {hours} : {minutes}
            </S.Time>
            <S.Date>
                {day}, {dayNumber} {month}
            </S.Date>
            </>
        }
        
    </S.Container>
    )

}

export default Time