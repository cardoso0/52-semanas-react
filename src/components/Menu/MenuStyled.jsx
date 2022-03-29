import styled from 'styled-components'

export const Menu = styled.nav`
  margin: auto;
  margin-bottom: 1em;
  background-color: #F8F9FA;
  // background-color: green;
  // border: 1px solid black;
  
  ul {
    // border: 1px solid black;
    padding: 0.8em 0;
    display: flex;
  }

  .link {
    text-decoration: none;
    // border: 1px solid black;
    font-size: 1.1em;
    color: rgba(0,0,0,.5);
    padding: 0.4em 1em;
    &:hover {
      color: black
    }
  }
  
  li {
    // border-bottom: 1px solid black;
    list-style-type: none;
  }

  // @media (min-width: 320px) and (max-width: 759px) {
  //   background-color: black;
  // }
`