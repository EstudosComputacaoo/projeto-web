import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import HeaderDefault from './Default';
import HeaderLogin from './Login';
import HeaderMobile from './Mobile';
import { HeaderContainer } from './style';

export default function Header() {
	const [width, setWidth] = useState(null);
	const router = useRouter();

	const handleResize = () => setWidth(window.innerWidth);

	useEffect(() => {
		setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
	}, []);

	const renderHeader = () => {
		if (router.pathname === '/login') return <HeaderLogin />;
		else if (width !== null) {
			return <HeaderContainer>{width > 768 ? <HeaderDefault /> : <HeaderMobile />}</HeaderContainer>;
		}
		return null;
	};

	return renderHeader();
}
