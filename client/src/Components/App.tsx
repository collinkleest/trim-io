import * as React from "react";
import { Header } from "./Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #ECECEC;
  }

`;

export class App extends React.Component{
  render() {
    return (
      <div>
        <GlobalStyles />
        <Header title="Introducing Trim.io" subTitle="A simple URL shortener by Collin Kleest" />
      </div>
    )
  }
}
