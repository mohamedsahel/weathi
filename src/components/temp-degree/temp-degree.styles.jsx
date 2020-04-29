import styled from 'styled-components'


export const Temp = styled.div`
    font-size: ${p => p.size || 'inherit'};
    font-weight: inherit;
    display: flex;
    align-items: flex-start;
    line-height: 80%;
`

export const Degree = styled.div`
    line-height: 100%;
    font-size: min(max(0.6em, 2vw), 2em);
`