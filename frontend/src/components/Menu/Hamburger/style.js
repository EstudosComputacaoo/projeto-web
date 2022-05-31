import styled, { css } from "styled-components";

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 38px;
  width: 38px;
  margin: 0 28px 0 0;
  padding: 9.5px 4.75px;
  cursor: pointer;
`;

export const MenuItem = styled.span`
  height: 4px;
  width: 28.5px;
  border-radius: 2px;
  background: white;
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 300px;
  padding: 32px 16px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: #0060b1;
  color: white;
  transition: all 0.8s;
  ${({ closed }) =>
    closed &&
    css`
      left: -100%;
      opacity: 0;
      diplay: none;
    `}
`;

export const MenuContentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuContentListItem = styled.li`
  margin: 16px 0;
`;

export const MenuContentListLink = styled.a`
  font-size: 16px;
  padding: 16px 8px;
  text-transform: capitalize;
`;

export const ButtonClose = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  color: white;
  font-size: 36px;
  font-weight: bold;
  cursor: pointer;
`;

export const ContentTitle = styled.p`
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 24px;
`;
