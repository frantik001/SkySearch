import styled from "styled-components";

export const ListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

export const Data = styled.div`
text-align: center;
cursor: pointer;
color: #d1d7e0;
`;

export const Button = styled.button`
  height: 5vh;
  width: 15vh;
  color: #d1d7e0;
  background: indigo;
  border-radius: 12px;
  font-size: 14px;
  transition: 0.3s;
  &:hover {
    background: blueviolet;
  }
`;

export const ButtonBox = styled.div`
    display: flex;
   justify-content: space-around;
   padding-top: 30px;
}`;
