import styled, { css } from 'styled-components'

import { WeatherIcon } from '@components'

export const _WeatherIcon = styled(WeatherIcon)`
    width: 3.6rem;
    height: 3.6rem;

    path {
        stroke: ${p => p.theme.colors.halfDark};
    }
`

export const TableColumn = styled.div`
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
        box-shadow: 0.8rem 0.8rem 2rem rgba(0, 0, 0, 0.1);
        
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
    padding: 1rem 0rem 1rem 0rem;

    > .fadeIn {
        display: flex;
        justify-content: space-between;
    }
`
