import Axios from "axios";
import * as React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 360px;
  background: #fff;
  color: $input-text-color;
  font: inherit;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0 , .1);
  border: 0;
  outline: 0;
  padding: 22px 18px;
`

const StyledBtn = styled.button`
  display: inline-block;
	background: transparent;
	color: inherit;
	font: inherit;
	border: 0;
	outline: 0;
	padding: 0;
	transition: all 200ms ease-in;
  cursor: pointer;
  
  background: #7f8ff4;
  color: #fff;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, .1);
  border-radius: 2px;
  padding: 12px 36px;
  
  margin-left: -96px;

  &:hover {
    background-color: #7282E7;
  }
  
  &:active {
    background: #7f8ff4;
    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, .2);
  }
`

const StyledLabel = styled.p`
`


export interface TextInputProps {
  placeHolder: string;
  id: string;
}

export interface StateInterface {
  value: string;
  responseJSON: string;
  clicked: boolean;
}

export class TextInput extends React.Component<TextInputProps, StateInterface> {
  
  constructor(props: TextInputProps) { 
    super(props);
    this.state = {
      clicked: false,
      responseJSON: "",
      value: ""
    }
  }

  createTrigger() {
    Axios.post('http://localhost:5000/create-url',
      {
        "url": this.state.value,
        "date": new Date().toLocaleString()
      }
    ).then((response) => {
      console.log(response.data);
      this.setState({
        clicked: true,
        responseJSON: response.data,
        value: ''
      })
    }).catch((error) => {
      console.log(error);
    })
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) { 
    this.setState({
        value: event.target.value
    })
  }

  render() {
    return (
        <React.Fragment>
          <StyledInput
            type="text"
            name={this.props.id}
            id={this.props.id}
            placeholder={this.props.placeHolder}
            onChange={(event) => this.handleChange(event)}
            value={this.state.value}
          />
          <StyledBtn onClick={() => this.createTrigger()}>
          Create
          </StyledBtn>
        {this.state.clicked && <StyledLabel>{JSON.parse(this.state.responseJSON).get('shortenedUrl')}</StyledLabel>}
        </React.Fragment>
    );
  }
}