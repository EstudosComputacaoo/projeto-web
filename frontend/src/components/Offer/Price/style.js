import styled from "styled-components";

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const TextNormal = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #7f858d;
  text-transform: uppercase;
`;

export const TextNormalDark = styled(TextNormal)`
  color: #565c69;
`;

export const TextNormalDarkLine = styled(TextNormalDark)`
  text-decoration: line-through;
`;

export const TextBold = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #42464d;
`;

export const TextOrange = styled.p`
  font-size: 24px;
  line-height: 34px;
  font-weight: 700;
  color: #ff6500;
`;
