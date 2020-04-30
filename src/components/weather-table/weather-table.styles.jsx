import styled, { css } from 'styled-components'

import { WeatherIcon } from '@components'

export const _WeatherIcon = styled(WeatherIcon)`
    width: 3.6rem;
    height: 3.6rem;

    path {
        stroke: ${p => p.theme.colors.halfDark};
    }
`

export const TableRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: ${p => p.theme.colors.halfDark};
    font-size: 2rem;
    font-weight: 400;
    padding: 1rem;

    ${p =>  p.selected && css`
        color: rgb(33, 43, 91);
        border-radius: 2.6rem;
        background: white;
        font-weight: 600;

        
        ${_WeatherIcon} path {
            stroke: rgb(33, 43, 91);
        }
    
    `}

    > * {
        margin: 1.4rem;
    }

`

export const Table = styled.div`
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;

    > .fadeIn {
        display: flex;
        justify-content: space-between;
    }
`
