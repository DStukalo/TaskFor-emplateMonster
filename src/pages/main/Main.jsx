import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPhotos } from '../../store/reducers/photoSlice';
import { Gallery } from '../../components/Galery/Gallery';
import { Pagination } from '../../components/Pagination/Pagination';
import { MainHeader } from '../../components/MainHeader/MainHeader';
import styles from './Main.module.scss'

export const Main = () => {
	const {photos, isLoading} = useSelector(state => state.photos);
	const page = localStorage.getItem('page') ? localStorage.getItem('page'): 1;
	const limit = Number(localStorage.getItem('limit') ? localStorage.getItem('limit'): '10');
	const dispatch = useDispatch();

	useEffect(() => {
		if(photos.length === 0) {
			dispatch(fetchPhotos({page: page, limit: limit}));
		};
	}, []);


	return (
		<div className={styles.main}>
			<div className={styles.container}>
			{ !isLoading ? <MainHeader /> : null}
			<Gallery />
			{ !isLoading ? <Pagination /> : null}
			</div>
		</div>
	);
};
