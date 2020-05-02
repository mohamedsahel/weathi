import styled, { css } from 'styled-components'

export const Container = styled.div`
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
    box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.1);
    background: white;
    padding: 0.8rem;
    overflow: hidden;

    @media (pointer: fine) and (hover: hover) {
        cursor: pointer;
    }
`

export const Scroller = styled.div`
    transition: 0.3s transform ease-out; 
    height: 250%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    svg {
        height: 37%;
    }

    ${p => !p.isDefault && css`
        transform: translateY(-62%);
    `}
`

