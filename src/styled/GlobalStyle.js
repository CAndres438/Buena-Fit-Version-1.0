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
  background-color: #000;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ::-webkit-scrollbar {display: none;}
  
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