import styled, { css } from 'styled-components'

export const Container = styled.div`
    min-width: 12rem;
    min-height: 15rem;
    margin-right: 5%;
    margin-bottom: 3rem;
    border-radius: 3rem;
    box-shadow: 1rem 1rem 4em rgba(0, 0, 0, 0.1);
    position: relative;
    background-image: url(${p => p.cityImage});
    background-position: center center;
    background-size: cover;
    color: white;

    > * {
        position: absolute;
        left: 1.4rem;
    }

    svg {
        height: 3rem;
        width: 3rem;
        top: 0.8rem;
    }

    span {
        font-size: 1.6rem;
        top: 3.4rem;
    }

`