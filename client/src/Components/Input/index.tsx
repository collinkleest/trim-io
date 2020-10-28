import { TextInput } from "./TextInput";
import styled from "styled-components";

const InputWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 30px;
  text-align: center;
  span {
    position: relative;
    display: inline-block;
    margin: 30px 10px;
  }
`;

export {TextInput, InputWrapper};