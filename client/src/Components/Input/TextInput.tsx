import * as React from "react";
import styled from "styled-components";

export interface TextInputProps {
  placeHolder: string;
  id: string;
}

export class TextInput extends React.Component<TextInputProps, {}> {
  render() {
    return (
        <input type="text" name={this.props.id} id={this.props.id} placeholder={this.props.placeHolder} />
    );
  }
}