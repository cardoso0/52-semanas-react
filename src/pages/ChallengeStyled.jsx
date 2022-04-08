import styled from 'styled-components'

export const Main = styled.main`
  max-width: 90%;
  margin: 0 auto;

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

  @media (min-width: 1100px) {
    max-width: 90%;
  }
`