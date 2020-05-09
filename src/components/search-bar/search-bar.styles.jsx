import styled, { css } from 'styled-components'

import { SearchSuggestions } from '@components'
import { SearchIcon } from '@icons'


export const Container = styled.div`
    display: inline-flex;
    align-items: center;
    border-radius: 1.6rem;
    padding: 1.6rem;
    padding-left: 0;
    background: white;
    max-width: 95%;
    width: 5rem;
    border: 0.05rem solid rgba(0, 0, 0, 0.01);
    box-shadow: 1rem 1rem 4em rgba(0, 0, 0, 0.08);
    position: relative;
    z-index: 4;
    transition: all 0.3s;

    ${p => p.isExpanded && css`
        width: 38rem;
    ` }
`

export const _SearchSuggestions = styled(SearchSuggestions)`
    position: absolute;
    top: 6rem;
    left: 0;
    width: 100%;
    z-index: 4;
`

export const Input = styled.input`
    width: 0;
    padding: 0;
    font-size: 1.6rem;
    background: transparent;
    border: none;
    opacity: 0;
    transition: all 0.3s;

    ${p => p.isExpanded && css`
        width: 24rem;
        margin-left: 5.4rem;
        opacity: 1;
    ` }

    &::placeholder {
        font-size: 1.4rem;
        color: rgb(217, 216, 220);
    }
`

export const _SearchIcon = styled(SearchIcon)`
    position: absolute;
    width: 5rem;
    height: 5rem;
    min-width: 5rem;
    min-height: 5rem;
    padding: 1.4rem;
    fill: rgb(154, 161, 181);
`