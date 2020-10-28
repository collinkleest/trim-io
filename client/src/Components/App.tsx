import * as React from "react";
import { Header } from "./Header";
import { TextInput, InputWrapper } from "./Input";

export class App extends React.Component{
  render() {
    return (
      <div>
        <Header
          title="Introducing Trim.io"
          subTitle="A simple URL shortener by Collin Kleest"
        />
        <InputWrapper>
          <TextInput
            placeHolder="Enter your link address"
            id="txt-input"
          />
        </InputWrapper>
      </div>
    )
  }
}
