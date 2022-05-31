import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  width: 170px;
  height: 36px;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 80px;
  }
`;
export const UserName = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 4px;
`;

export const UserFirstName = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  color: white;
  margin: 0;
`;

export const UserLastName = styled(UserFirstName)`
  @media (max-width: 1280px) {
    display: none;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Avatar = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 18px;
  margin-right: 8px;
`;

export const ImageWrap = styled.span`
  margin-right: 8px;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > span {
    border-radius: 18px;
  }
`;
