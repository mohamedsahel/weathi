import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    position: relative;

    > * {
        height: 100vh;
        width: 100%;
        overflow: hidden;
    }

    .map-section {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }


    @media (min-width: 800px) {
        display: flex;
        flex-direction: row-reverse;
        > * {
            width: 50%;
        }

        .map-section {
            z-index: 0;
        }
    }
`