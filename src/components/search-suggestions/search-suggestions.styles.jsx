import styled from 'styled-components'

export const Row = styled.div`
    padding: 1.6rem;
    font-size: 1.4rem;
    font-weight: 400;
    background: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: black;

    &:hover {
        background: rgb(245, 245, 245);
    }
`

export const Container = styled.div`
    border-radius: 1.6rem;
    overflow: hidden;
    box-shadow: 1rem 1rem 4em rgba(0, 0, 0, 0.08);
`