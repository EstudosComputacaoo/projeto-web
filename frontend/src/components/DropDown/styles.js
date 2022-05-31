import styled from "styled-components";

export const Main = styled.div`
  position: relative;
  background: #e35214;
  padding: 8px;
  cursor: pointer;

  &:after {
    top: 0;
    right: 100%;
    content: "";
    width: 100vw;
    height: 100%;
    position: absolute;
    background: #e35214;
  }
`;

export const DropDownContainer = styled.div`
  width: 100%;
`;

export const DropDownHeader = styled.div`
  /* background: #f26d1e; */
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  text-align: center;
  z-index: 99;
`;

export const DropDownList = styled.ul`
  padding: 8px;
  margin: 0;
  background: #e35214;
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;

export const Text = styled.span`
  color: white;
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  text-transform: uppercase;
  width: 210px;
  text-align: center;
`;

export const Title = styled(Text)`
  margin-right: 18px;
`;
