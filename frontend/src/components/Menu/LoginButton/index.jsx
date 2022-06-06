import * as BL from './styles';
import Link from 'next/link';
import { useAuthContext } from '../../_Context/AuthContext';

export default function LoginButton() {
	const { user } = useAuthContext();
	return (
		<BL.Button>
			<Link href={user ? '/api/logout' : '/login'}>{`${user ? 'Logout' : 'Login'}`}</Link>
		</BL.Button>
	);
}
