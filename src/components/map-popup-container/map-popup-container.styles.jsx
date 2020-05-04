import styled from 'styled-components'

export const MapPopupContainer = styled.div`
  display: none;
  cursor: auto;
  position: absolute;
  transform: translate(-50%, calc(-100% - 1.2rem));

  &::after {
    content: "";
    position: absolute;
    bottom: -1.2rem;
    left: 50%;

    transform: translate(-50%, 0);

    width: 0;
    height: 0;

    border-left: 0.6rem solid transparent;
    border-right: 0.6rem solid transparent;
    border-top: 1.2rem solid ${p => p.anchorColor || 'white'};
  }
`