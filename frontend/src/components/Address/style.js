import styled from "styled-components";

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: white;
`;

export const TextBold = styled(Text)`
  font-weight: 700;
`;
