import styled from 'styled-components'

export const Popup_bubble = styled.div`
   /* Position the bubble centred-above its parent. */
   position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -100%);
    /* Style the bubble. */
    background-color: red;
    padding: 5px;
    border-radius: 5px;
    font-family: sans-serif;
    overflow-y: auto;
    max-height: 60px;
    box-shadow: 0px 2px 10px 1px rgba(0,0,0,0.5);
`

export const Popup_bubble_anchor = styled.div`
    position: absolute;
    width: 100%;
    bottom: 8px;
    left: 0;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    transform: translate(-50%, 0);

    width: 0;
    height: 0;

    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid white;
  }
`

export const Popup_container = styled.div`
    display: none;
    cursor: auto;
    height: 0;
    position: absolute;
    /* The max width of the info window. */
    width: 200px;
`