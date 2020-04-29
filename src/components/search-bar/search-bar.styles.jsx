import styled, { css } from 'styled-components'

import { SearchIcon } from '@icons'

export const Container = styled.div`
    display: inline-flex;
    align-items: center;
    border-radius: 1.6rem;
    padding: 1.6rem;
    background: white;
    max-width: 95%;
    border: 0.05rem solid rgba(0, 0, 0, 0.01);
    box-shadow: 0rem 1rem 4em rgba(0, 0, 0, 0.05);
`

export const Input = styled.input`
    width: 0;
    padding: 0;
    font-size: 1.6rem;
    background: transparent;
    border: none;
    transition: all 0.3s;

    ${p => p.isExpanded && css`
        width: 24rem;
        margin-left: 1.6rem;
    ` }

    &::placeholder {
        font-size: 1.4rem;
        color: ${p => p.theme.colors.gray_1};
    }
`

export const _SearchIcon = styled(SearchIcon)`
    min-width: 1.8rem;
    min-height: 1.8rem;
    fill: ${p => p.theme.colors.gray_2}
`