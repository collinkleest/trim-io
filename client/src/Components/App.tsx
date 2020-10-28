import * as React from "react";
import { Header } from "./Header";
import { BtnSubmit, TextInput } from "./Input";

export class App extends React.Component{
  render() {
    return (
      <div>
        <Header
          title="Introducing Trim.io"
          subTitle="A simple URL shortener by Collin Kleest"
        />
          <TextInput
            placeHolder="Enter your link address"
            id="txt-input"
          />
          <BtnSubmit
            text="Shorten"
            id="txt-submit"
          />
        </div>
    )
  }
}
