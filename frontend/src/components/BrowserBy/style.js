import styled from "styled-components";

export const BrowserBy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 84px 0 32px;
  padding: 0 72px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  height: 100%;
  text-align: center;
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 66px;
  width: 100%;
  padding: 16px;
`;

export const Title = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 14px;
  }
`;
export const Description = styled.p`
  font-size: 10px;
  line-height: 16px;
  font-weight: 400;

  @media (max-width: 768px) {
    display: none;
  }
`;
