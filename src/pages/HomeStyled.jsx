import styled from 'styled-components'

export const Main = styled.main`
  // background-color: black;
  max-width: 95%;
  margin: auto;

  h1 {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 0.5em;
    text-align: center;
  }

  @media (min-width: 760px) {
    h1 {
      text-align: left;
    }
  }

  @media (min-width: 1100px) {
    max-width: 90%;
  }

`
export const Section = styled.section`

  .imgBlock {
  margin-bottom: 2em;
  
  }

  @media (min-width: 760px) {
    display: flex;
    justify-content: space-between;
    // border: 1px solid black;
  }
`

export const Image = styled.img`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: block;

  @media (min-width: 760px) {
    // display: inline;
    // border: 1px solid black;
  }
`

export const Article = styled.article`
  // border: 1px solid black;
  padding: 0 1em;

  .content {
    margin-bottom: 2em;
  }
  
  h3 {
    font-size: 1.3em;
    font-weight: bold;
    line-height: 1.2em;
    margin-bottom: 1em;
  }

  p {
    font-size: 1.2em;
    line-height: 1.2em;
  }

  .card {
    // border: 1px solid black;
    // padding: 1.2em 1.2em;
    p {
      margin-bottom: 1.2em;
      font-weight: 600;
    }

    button {
      width: 8em;
      height: 2em;
      color: white;
      background-color: #4985E8;
      font-size: 1.3em;
      border: none;
      cursor: pointer;
    }
    a {
      text-decoration: none;
      color: white;
    }
  }

  @media (min-width: 760px){
    width: 50%;
  }
`