import * as React from "react";
import { Header } from "./Header";
import { TextInput, InputWrapper, Collapsable } from "./Input";

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
            placeHolder="Enter link"
            id="txt-input"
          />
        </InputWrapper>
        <Collapsable />
      </div>
    )
  }
}
