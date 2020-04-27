import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: stretch;

    > * {
        flex: 1;
    }

    @media (min-width: 800px) {
        flex-direction: row-reverse;
        > * {
            flex: 1;
        }
    }
`