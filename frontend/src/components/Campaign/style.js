import styled from "styled-components";

export const Campaing = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  width: 100%;
  padding: 8px 72px;
  margin-bottom: 34px;
  background-color: #ff6500;

  @media (max-width: 768px) {
    padding: 8px 32px;
  }
  @media (max-width: 540px) {
    padding: 8px;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  text-transform: uppercase;
  color: white;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }
  @media (max-width: 540px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const Timer = styled(Title)`
  min-width: 150px;

  @media (max-width: 768px) {
    min-width: 100px;
  }
`;

export const Warning = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0px;
  color: white;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 26px;
  }

  @media (max-width: 540px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
