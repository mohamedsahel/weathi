import React from 'react'

import { useTime } from '@hooks'

import * as S from './time.styles'

const Time = (props) => {
    const {hours, minutes, day, dayNumber, month} = useTime(1000)
    const didUpdate = React.useRef(false)

    React.useEffect(() => {
        if (didUpdate.current) {
            window.localStorage.removeItem('weather')
        } else didUpdate.current = false
    }, [hours])

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