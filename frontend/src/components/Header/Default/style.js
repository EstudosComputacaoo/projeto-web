import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0060b1;
  height: 112px;
  width: 100%;
  padding: 0 112px 0 108px;

  @media (max-width: 1280px) {
    padding: 0 66px 0 60px;
  }
  @media (max-width: 1024px) {
    padding: 0;
  }
`;

export const UserInfo = styled.div`
  @media (max-width: 1280px) {
    display: none;
  }
`;

export const Logo = styled.div`
  align-self: center;
  max-height: 53.73px;
  max-width: 157.42px;
  margin-right: 42px;
  cursor: pointer;
`;

export const Input = styled.div`
  max-width: 534px;
  width: 100%;
  margin-right: 72px;
`;
