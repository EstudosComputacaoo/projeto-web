import { ErrorMessage, Form, Input, InputWrapper } from './style';
import { useForm } from 'react-hook-form';
import { Button } from './style';
import { useAuthContext } from '../../_Context/AuthContext';

export default function FormLogin() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { getUser } = useAuthContext();

	const handleLogin = (data, event) => {
		event.preventDefault();

		getUser(data);
	};

	return (
		<Form onSubmit={handleSubmit(handleLogin)}>
			<h1>Fazer login</h1>
			<InputWrapper>
				<Input {...register('email', { required: true })} name='email' placeholder='E-mail' type='text' />
				{errors?.email && <ErrorMessage>Esse campo é obrigatório</ErrorMessage>}
			</InputWrapper>
			<InputWrapper>
				<Input {...register('password', { required: true })} name='password' placeholder='Senha' type='password' />
				{errors?.password && <ErrorMessage>Esse campo é obrigatório</ErrorMessage>}
			</InputWrapper>
			<Button type='submit'>Login</Button>
		</Form>
	);
}
