import styled from 'styled-components'

export const Container = styled.div`
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
    z-index: 2;
    display: flex;
    flex-direction: column;
    background: ${p => p.theme.colors.light};
    padding: 1.6rem;
`