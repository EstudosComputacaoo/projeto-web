import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useSearchContext } from '../_Context/search';
import Address from '../Address';
import { useAuthContext } from '../_Context/AuthContext';
import * as S from './style';

export default function Search() {
	const [term, setTerm] = useState();
	const { user } = useAuthContext();
	const { filterProducts } = useSearchContext();

	const handleChange = (e) => {
		setTerm(e.target.value);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		filterProducts(term);
	};

	return (
		<S.InputContainer>
			<S.SearchIcon>
				<S.Input placeholder='Busque aqui' onChange={(e) => handleChange(e)} />
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					color='black'
					style={{ transform: 'translate(-120%, 60%)', cursor: 'pointer' }}
					onClick={handleSearch}
				/>
			</S.SearchIcon>
			{user?.address && <Address address={user.address} />}
		</S.InputContainer>
	);
}
