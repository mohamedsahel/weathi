import styled, {css} from 'styled-components'

export const Container = styled.div`
    width: 100%;
    margin-top: 14vh;
    margin-bottom: 2rem;
    text-align: center;
`

export const TabsHeader = styled.div`
    display: inline-flex;
    justify-content: space-around;
    font-size: 1.6rem;
    padding-bottom: 3rem;
    color: ${p => p.theme.colors.halfDark};
    width: min(80%, 24rem);
`

export const TabLink = styled.span`

    @media (pointer: fine) and (hover: hover) {
        &:hover {
            cursor: pointer;
            color: ${p => p.theme.colors.dark};
        }
    }


    &::after{
        content: '';
        display: block;
        width: 0rem;
        height: 0.3rem;
        background: ${p => p.theme.colors.dark};
        border-radius: 30%;
        margin: auto;
        margin-top: 1rem;
        transition: 0.3s all;
    }

    ${p => p.current && css`
        font-weight: 600;
        color: ${p => p.theme.colors.dark};

        &::after {
            width: 2rem;
        }
    `}
`