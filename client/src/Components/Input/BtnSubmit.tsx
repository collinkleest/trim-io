import * as React from "react";

interface BtnSubmitProps {
  text: string;
  id: string;
}

export class BtnSubmit extends React.Component<BtnSubmitProps, {}>{ 
  render() {
    return (
      <button id={this.props.id}> {this.props.text} </button>
    );
  }
}