import styled from 'styled-components'


export const Temp = styled.div`
    font-size: ${p => p.size || 'inherit'};
    font-weight: inherit;
    display: flex;
    align-items: flex-start;
`

export const TempValue = styled.span`
    font-weight: inherit;
    font-size: inherit;
    line-height: 80%;
`

export const Degree = styled.span`
    line-height: 80%;
    font-size: min(max(0.6em, 2vw), 2em);
`