import styled, { css } from 'styled-components'

import { WeatherIcon, Time } from '@components'

export const Container = styled.div`
    width: 100%;
    max-width: 40rem;
    position: relative;

`

export const _Time = styled(Time)`
    position: absolute;
    bottom: 0;
    right: 0;
`

export const _WeatherIcon = styled(WeatherIcon)`
    width: 6rem;
    height: 6rem;
`

export const Temp = styled.div`
    font-size: 14rem;
    font-weight: 200;
    display: flex;
    align-items: flex-start;
    line-height: 80%;
`

export const Degree = styled.div`
    line-height: 100%;
    font-size: 6rem;
`