import styled from 'styled-components'

import { WeatherIcon, TempDegree } from '@components'

export const Container = styled.div`
    width: 9rem;
    padding: 1rem;
    background: ${p => p.selected ? 'rgb(33, 43, 91)' : 'white'};
    box-shadow: 0.4rem 0.4rem 1.6rem rgba(0, 0, 0, 0.2);
    color: ${p => p.selected ? 'white' : 'rgb(33, 43, 91)'};
    border-radius: 1.6rem;
`

export const _TempDegree = styled(TempDegree)`
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 0.8rem;
`

export const CityName = styled.span`
    color: rgb(154, 161, 181);
`

export const _WeatherIcon = styled(WeatherIcon)`
    width: 1.8rem;
    position: absolute;
    top: 1rem;
    right: 1rem;

    path {
        stroke: ${p => p.selected && 'white' };
    }
`