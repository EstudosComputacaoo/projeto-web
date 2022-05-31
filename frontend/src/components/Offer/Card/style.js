import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 401px;
  width: 214px;
  background-color: #fff;
  cursor: pointer;
  flex: none;

  :hover {
    box-shadow: rgba(40, 41, 61, 0.04) 0px 4px 8px,
      rgba(96, 97, 112, 0.16) 0px 8px 16px;
  }
`;

export const Info = styled.div`
  padding: 0 1rem;
`;

export const TextNormal = styled.p`
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 8px;
  font-weight: 400;
  color: #7f858d;
  text-transform: uppercase;
`;

export const TextNormalDark = styled.p`
  font-size: 12px;
  line-height: 21px;
  font-weight: 400;
  text-transform: uppercase;
  color: #565c69;
`;

export const TextNormalDarkLine = styled.p`
  font-size: 12px;
  line-height: 21px;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: line-through;
  color: #565c69;
`;

export const TextBold = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  margin-bottom: 32px;
  height: 40px;
  overflow: hidden;
  color: #42464d;
`;

export const DivFlex = styled.div`
  display: flex;
  gap: 4px;
`;

export const ImageWrap = styled.span`
  margin-bottom: 16px;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 212px;
  height: 106px;
`;
