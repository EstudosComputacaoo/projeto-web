import styled from "styled-components";

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 1024px) {
    gap: 8px;
  }
`;

export const ImageWrap = styled.span`
  position: relative;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

export const CartQuantity = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  width: 16px;
  border-radius: 8px;
  color: black;
  background: white;
  font-size: 10px;
  font-weight: bold;
`;
