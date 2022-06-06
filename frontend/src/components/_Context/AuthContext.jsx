import { createContext, useContext, useState } from 'react';
import { setCookies, removeCookies } from 'cookies-next';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export function AuthProvider({ children, ...props }) {
	const API_URL = 'http://localhost:3003/api/user';
	const [user, setUser] = useState(null);
	const router = useRouter();

	const getUser = (data) => {
		fetch(API_URL, {
			body: JSON.stringify({ ...data }),
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
		})
			.then((res) => res.json())
			.then((data) => {
				setUser(data);
				setCookies('user_id', data.id);
				router.push('/');
			});
	};

	const authProps = {
		user,
		getUser,
	
		...props,
	};

	return <AuthContext.Provider value={{ ...authProps }}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
	return useContext(AuthContext);
}
