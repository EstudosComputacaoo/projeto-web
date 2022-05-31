import { useEffect, useState } from 'react';
import { Form, Input } from './style';

export default function FormLogin() {

    const [userName, setUserName] = useState('')

    useEffect(() =>{
        console.log(userName)
        var re = /\S+@\S+\.\S+/;
        console.log(
           
            re.test(userName)
          )

    }, [userName])
	return (
		<Form>
			<h1>Fazer login</h1>
			<Input placeholder='E-mail' type='text' onChange={e => setUserName(e.target.value)} />
			<Input placeholder='Senha' type='password' />
			<button>Login</button>
		</Form>
	);
}
