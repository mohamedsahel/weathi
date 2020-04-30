import styled from 'styled-components'

import { WeatherIcon, Time } from '@components'

export const Container = styled.div`
    width: 100%;
    position: relative;

`

export const _Time = styled(Time)`
    position: absolute;
    bottom: 0;
    right: 0;
`

export const _WeatherIcon = styled(WeatherIcon)`
    width: 5.2rem;
    height: 5.2rem;

    path {
        stroke: ${p => p.theme.colors.dark};
    }
`
