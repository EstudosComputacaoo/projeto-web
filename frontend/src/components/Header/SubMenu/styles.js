import styled from "styled-components";

export const SubMenuContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #ff6500;
  width: 100%;
  align-items: center;
`;
export const Select = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 373px;

  :after {
    background: #e35214;
  }

  p {
    margin-right: 18px;
  }
`;

export const Text = styled.p`
  width: 210px;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: white;
  text-transform: uppercase;
  text-align: left;
  cursor: pointer;
`;
