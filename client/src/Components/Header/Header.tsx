import * as React from "react";
import styled from "styled-components";

// interface for props
export interface HeaderProps {
  title: string;
  subTitle: string;
}

// styling with styled-components
const StyledDiv = styled.div`
  text-align: center;
  margin: 10% 0 0 0;
`;

const StyledHeader = styled.h1`
  font-size: 72px;
  margin: 0;
`;

const StyledSubHeading = styled.h4`
  font-size: 42px;
  margin: 2px 0 0 0;
  font-weight: 300;
`;

export class Header extends React.Component<HeaderProps, {}> {
  render() {
    return (
      <StyledDiv>
        <StyledHeader>{this.props.title}</StyledHeader>
        <StyledSubHeading>{this.props.subTitle}</StyledSubHeading>
      </StyledDiv>
    );
  }
}