import styled from 'styled-components'

export const Container = styled.div`
    display: inline-flex;
    flex-direction: column;
`

export const Time = styled.span`
    font-size: 3rem;
`

export const Date = styled.span`
    font-size: 1.4rem;
    color: ${p => p.theme.colors.halfDark}
`