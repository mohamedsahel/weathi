import styled from 'styled-components'

export const Container = styled.div`
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
    z-index: 2;
    background: ${p => p.theme.colors.light};
    padding: clamp(1.6rem, 5%, 2.6rem);
    padding-top: 0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`