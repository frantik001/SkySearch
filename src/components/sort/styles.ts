import styled from "styled-components";

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

export const Header = styled.h1`
  font-size: 20px;
  color: white;
`;

export const SortBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}`;

export const ButtonBox = styled.div`
    display: flex;
    gap: 10px
}`;
