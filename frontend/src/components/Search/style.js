import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    max-width: none;
  }
`;

export const Input = styled.input`
  height: 36px;
  text-align: start;
  margin-bottom: 8px;
  padding: 6px 34px 7px 12px;
  border: 0;
  width: 100%;

  ::-webkit-input-placeholder {
    text-transform: uppercase;
    font-size: 12px;
    line-height: 18px;
    font-weight: 600;
  }
`;

export const SearchIcon = styled.div`
  display: flex;
`;

export const ImageWrap = styled.div`
  margin-left: -24px;
  margin-top: -8px;
  cursor: pointer;
`;
