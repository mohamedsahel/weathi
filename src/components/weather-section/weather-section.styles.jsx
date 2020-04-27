import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
    z-index: 2;

    @media (min-width: 800px) {
        width: 50%;
    }
`