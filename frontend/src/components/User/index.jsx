import Image from 'next/image';
import MyAccount from '../MyAccount';

import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';

import * as U from './userStyle';

import { useAuthContext } from '../_Context/AuthContext';

export default function User() {
	const { user } = useAuthContext();
	return (
		<U.UserContainer>
			<U.ImageWrap>
				{user?.avatar ? (
					<Image src={user.avatar} alt='Avatar usuário' />
				) : (
					<FontAwesomeIcon icon={faUserLarge} color='white' />
				)}
			</U.ImageWrap>
			<U.Info>
				{user ? (
					<U.UserName>
						<U.UserFirstName>{`Olá ${user?.nome?.split(' ')[0]}`}</U.UserFirstName>
						<U.UserLastName>{`${user?.nome?.split(' ')[1] ?? ''}`}</U.UserLastName>
					</U.UserName>
				) : (
					<Link href='/login'>
						<span style={{ color: 'white' }}>Fazer login</span>
					</Link>
				)}

				{user && <MyAccount />}
			</U.Info>
		</U.UserContainer>
	);
}
