import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
      box-sizing: inherit;
    }

    * {
      font: inherit;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, hr {
      margin: 0;
      padding: 0;
      border: 0;
    }

    html {
      box-sizing: border-box;
      font-family: ${p => p.theme.font};
      font-size: 62.7%;
    }

    body {
      background-color: ${p => p.theme.colors.white};
      color: ${p => p.theme.colors.dark};
      font-family: ${p => p.theme.font};
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section, main, form legend {
      display: block;
    }

    ol, ul {
      list-style: none;
    }

    blockquote, q {
      quotes: none;
    }

    button, input, textarea, select {
      margin: 0;
      outline: none;
    }

    button, a {
      cursor: pointer;
      text-decoration: none;
    }

    img, video, svg {
      max-width: 100%;
      max-height: 100%;
    }


    @media (pointer: fine) and (hover: hover) {
      *::-webkit-scrollbar-track {
        border-radius: 1rem;
      }

      *::-webkit-scrollbar {
        width: 0.6rem;
        height: 0.6rem;
      }

      *::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${p => p.theme.colors.gray_1};
      }

      *::-webkit-scrollbar-thumb:active {
        background-color: ${p => p.theme.colors.gray_2};
      }
    }
`


export default GlobalStyle;