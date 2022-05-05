import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* Reset */
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* img {
  display: block;
} */

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ::-webkit-scrollbar { 
    visibility: none;
  }
  // background: rgb(183,183,183);
  // background: linear-gradient(90deg, rgba(183,183,183,1) 0%, rgba(240,240,240,1) 44%, rgba(240,240,240,1) 57%, rgba(182,182,182,1) 100%);
  background: rgb(14,15,19);
background: linear-gradient(90deg, rgba(14,15,19,1) 0%, rgba(19,22,25,1) 44%, rgba(19,22,25,1) 57%, rgba(0,0,0,1) 100%);
  
}

/* chat */

.ce-my-message-bubble {
  background-color: #000 !important;
}

.ce-chat-title-text {
  color: #000 !important;
}

.ce-chat-subtitle-text {
  color: blue !important;
  font-weight: 600;
}

#ce-send-message-button {
  position: relative !important;
  bottom: 2px !important;
  left: 1px !important;
  background-color: #222 !important;
}

.ce-my-message-timestamp {
  color: #7a39e0 !important;
}

.transition-3 {
  transition: all 0.33s ease;
  -webkit-transition: all 0.33s ease;
  -moz-transition: all 0.33s ease;
}

.transition-5 {
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
}
`;


export default GlobalStyle;