import styled, { css } from 'styled-components'


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
        color: ${p => p.theme.colors.dark};
        border-radius: 2.6rem;
        background: white;
        font-weight: 600;
    `}

    > * {
        margin: 1.4rem;
    }

    > svg {
        width: 4rem;
        height: 4rem;
    }
`

export const Table = styled.div`
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;

    > * {
        display: flex;
        justify-content: space-between;
    }
`
