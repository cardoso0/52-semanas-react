import styled from 'styled-components'

export const Main = styled.main`
  max-width: 95%;
  margin: auto;

  h1 {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: 1.3em;
    font-weight: 600;
    line-height: 1.2em;
    margin-bottom: 1em;
  }

  form {
    display: flex;
  }

  input {
    width: 7em;
    height: 1.7em;
    font-size: 1.3em;
  }

  button {
    width: 6em;
    height: 2em;
    color: white;
    background-color: #4985E8;
    font-size: 1.3em;
    border: none;
    cursor: pointer;
    border-radius: 2px;
  }

  @media (min-width: 1100px) {
    max-width: 90%;
  }

`