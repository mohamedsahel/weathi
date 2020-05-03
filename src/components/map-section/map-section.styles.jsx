import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;

    position: absolute;
    top: 0;
    left: 0;
    z-index: ${p => p.intop ? 3 : -1} ;

/* 
    .popup-bubble {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -100%);

        background-color: red;
        padding: 5px;
        border-radius: 5px;
        font-family: sans-serif;
        overflow-y: auto;
        max-height: 60px;
        box-shadow: 0px 2px 10px 1px rgba(0,0,0,0.5);
      }

      .popup-bubble-anchor {
        position: absolute;
        width: 100%;
        bottom: 8px;
        left: 0;
      }

      .popup-bubble-anchor::after {
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
      .popup-container {
        cursor: auto;
        height: 0;
        position: absolute;

        width: 200px;
      } */
`