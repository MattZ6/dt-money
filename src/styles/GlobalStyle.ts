import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
  :root {
    --background-color: #f0f2f5;
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;
    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;
    
    --max-width: 1120px;

    @media (prefers-color-scheme: dark) {
      --background-color: #0d1117;
      --blue: #11141e;

      --shape: #191e2e;
      
      --text-title: #52629a;
      --text-body: #3f455c;
    }
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    // Default - 16px (1rem)

    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 700px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background-color);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;