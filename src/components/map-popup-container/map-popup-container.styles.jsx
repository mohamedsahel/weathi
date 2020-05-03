import styled from 'styled-components'

export const MapPopupContainer = styled.div`
  display: none;
  cursor: auto;
  position: relative;
  transform: translate(-50%, calc(-100% - 8px));

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;

    transform: translate(-50%, 0);

    width: 0;
    height: 0;

    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid ${p => p.anchorColor || 'white'};
  }
`