import Image from 'next/image';
import Logo from '../../../assets/images/Logo.png';
import * as H from '../Default/style';
import * as G from '../../../styles/globals';
import Link from 'next/link';

export default function HeaderLogin() {
	return (
		<>
			<H.Main>
				<G.Container alignItems='center' justifyContent='space-between'>
					<H.Logo>
						<Image src={Logo} alt='Logo' />
					</H.Logo>

					<H.LinkGoBack>
						<Link href='/'>
							<span>Voltar</span>
						</Link>
					</H.LinkGoBack>
				</G.Container>
			</H.Main>
		</>
	);
}
