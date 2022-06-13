import styled, { css } from 'styled-components';
import { ButtonClose as BTN } from '../Menu/Hamburger/style';

export const ImageWrap = styled.span`
	position: relative;
	width: 36px;
	height: 36px;
	cursor: pointer;
	overflow: auto;
`;

export const CartQuantity = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 16px;
	width: 16px;
	border-radius: 8px;
	color: black;
	background: white;
	font-size: 10px;
	font-weight: bold;
`;
export const Wrapper = styled.div`
	cursor: pointer;
`;

export const CartContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 300px;
	padding: 32px 16px;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 9999;
	background-color: white;
	color: white;
	transition: all 0.8s;
	${({ closed }) =>
		closed &&
		css`
			right: -100%;
			opacity: 0;
			diplay: none;
		`}

	ul {
		padding: 0;
	}
`;

export const ButtonClose = styled(BTN)`
	color: black;
	font-size: 16px;
`;

export const Title = styled.span`
	font-size: 16px;
	color: black;
`;
