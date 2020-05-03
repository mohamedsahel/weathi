import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;

    position: absolute;
    top: 0;
    left: 0;
    z-index: ${p => p.intop ? 3 : -1} ;

`