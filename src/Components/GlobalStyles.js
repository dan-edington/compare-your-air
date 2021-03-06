import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
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
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

    body {
        background: rgb(122,54,177);
        background: linear-gradient(90deg, rgba(122,54,177,1) 0%, rgba(67,120,174,1) 100%);
        color: white;
        font-family: 'Open Sans', sans-serif;
        font-size: 1em;
        @media (max-width: 650px) {
            font-size: 0.8em;
        }

        @media (max-width: 520px) {
            font-size: 0.7em;
        }

        @media (max-width: 456px) {
            font-size: 0.6em;
        }
    }

    #app {
        display: flex;
        justify-content: center;
    }

`

export default GlobalStyles
