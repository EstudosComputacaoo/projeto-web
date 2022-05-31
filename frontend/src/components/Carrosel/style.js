import styled from "styled-components";

export const CarouselList = styled.div`
  display: flex;
  gap: 16px;
  position: relative;
  width: 100%;
  background-color: white;
  overflow: hidden;
  scroll-behavior: smooth;
`;

export const ArrowNext = styled.div`
  display: flex;
  width: 48px;
  justify-content: center;
  background: white;
  cursor: pointer;
`;

export const ArrowPrevious = styled.div`
  display: flex;
  width: 48px;
  justify-content: center;
  cursor: pointer;
  background: white;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  transition: 200ms;
  scroll-behavior: smooth;
  transition: all ease 1s;
  position: relative;
  padding: 0 40px;
`;

export const CarouselControlLeft = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  height: 100%;
  left: 0;
  top: 0;
`;

export const CarouselControlRight = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  height: 100%;
  top: 0;
  justify-content: flex-end;
  right: 0;
`;
