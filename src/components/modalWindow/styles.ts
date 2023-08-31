import styled from "styled-components";
export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  margin: 15% auto;
  border-radius: 12px;
  background: #363636;
  width: 444px;
  height: 554px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

export const ModalHeader = styled.h1`
  color: #d1d7e0;
`;

export const ModalImage = styled.img`
  max-width: 80%;
  max-height: 70%;
`;
