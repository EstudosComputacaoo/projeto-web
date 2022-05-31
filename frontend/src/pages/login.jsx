import FormLogin from '../components/Login/Form';

import LayoutDefault from '../components/_hoc/Layout';
import { Article } from '../styles/globals';
export default function LoginPage() {
	return (
		<LayoutDefault>
			<Article>
				<FormLogin />
			</Article>
		</LayoutDefault>
	);
}
