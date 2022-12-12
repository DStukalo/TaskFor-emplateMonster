import { useDispatch } from 'react-redux';

import { updatePhotos } from '../../store/reducers/photoSlice';
import styles from './MainHeader.module.scss'

export const MainHeader = () => {
	const limit = Number(localStorage.getItem('limit') ? localStorage.getItem('limit'): '10');
	const dispatch = useDispatch();

	const onChangeSelect = (e) => {
		localStorage.setItem('limit', e.target.value);
		localStorage.setItem('page', 1);
		dispatch(updatePhotos({page: 1, limit: e.target.value}));
	}

	return (
		<header className={styles.header}>
				<div className={styles.header__description}>
					<p className={styles.header__text}>Show on page</p>
					<select className={styles.header__select} onChange={ onChangeSelect } defaultValue={limit}>
						<option>10</option>
						<option>20</option>
						<option>30</option>
						<option>40</option>
						<option>50</option>
					</select>
				</div>
		</header>
	)
}