import styled from 'styled-components';

export const Input = styled.input`
	height: 40px;
	width: ${({ width }) => width || '400px'};
	border: 1px solid #dcdcdc;

	padding: 4px 8px;

	:focus {
		border: 1px solid #dcdcdc;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 16px;
	width: 100%;
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 16px;
`;

export const ErrorMessage = styled.span`
	color: red;
	font-size: 10px;
`;

export const Button = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 38px;
	max-width: 400px;

	margin-bottom: 24px;
	border-radius: 4px;
	background-color: #ff6500;
	border: 1px solid #ff6500;
	cursor: pointer;
	color: #fff;
	font-size: 12px;
	font-weight: 700;
	line-height: 18px;
	text-transform: uppercase;
`;
