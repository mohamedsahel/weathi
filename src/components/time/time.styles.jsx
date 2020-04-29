import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 12rem;
    width: 60rem;
    
    > * {
        display: block;
    }
`

export const Time = styled.span`
    font-size: 3rem;
`

export const Date = styled.span`
    font-size: 1.4rem;
    color: ${p => p.theme.colors.halfDark}
`