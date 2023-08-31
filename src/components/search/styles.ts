import styled from "styled-components";

export const SearchTerm = styled.input`
  border: none;
  border-radius: 12px;
  padding: 0px 5px 0px 5px;
  background: indigo;
  width: 50vw;
  height: 5vh;
  color: #d1d7e0;
  transition: 0.3s;
  &:focus {
    background: #580099;
    outline: none;
  }
`;
