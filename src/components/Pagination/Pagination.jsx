import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { updatePhotos } from '../../store/reducers/photoSlice';
import styles from './Pagination.module.scss';

export const Pagination = () => {
	const limit = Number(localStorage.getItem('limit') ? localStorage.getItem('limit'): '10');
	const [page, setPage] = useState(Number(localStorage.getItem('page') ? localStorage.getItem('page'): '1'));
	const maxPages = Math.ceil(1000/ limit);
	const [doubleLeftArrow, setDoubleLeftArrow] = useState(true);
	const [leftArrow, setLeftArrow] = useState(true);
	const [doubleRightArrow, setDoubleRightArrow] = useState(false);
	const [rightArrow, setRightArrow] = useState(false);
	const dispatch = useDispatch();

	const updateBTNs = (curPage) => {
		if (typeof curPage === 'string') curPage = Number(curPage)
		if(curPage === 1) {
			setDoubleLeftArrow(true);
			setLeftArrow(true);
			setDoubleRightArrow(false);
			setRightArrow(false);
		} else if (curPage === maxPages) {
			setDoubleLeftArrow(false);
			setLeftArrow(false);
			setDoubleRightArrow(true);
			setRightArrow(true);
		} else {
			setDoubleLeftArrow(false);
			setLeftArrow(false);
			setDoubleRightArrow(false);
			setRightArrow(false);
		}
	}

	useEffect(()=> {
		updateBTNs(page);
	}, [updateBTNs])

	const toLastPage = () => {
		setPage(maxPages);
		localStorage.setItem('page', maxPages);
		updateBTNs(maxPages);
		dispatch(updatePhotos({page: maxPages, limit: limit}));
	}

	const toNextPage = () => {
		setPage(page +1);
		localStorage.setItem('page', page + 1);
		updateBTNs(page +1);
		dispatch(updatePhotos({page: page + 1, limit: limit}));
	}

	const toPrevPage = () => {
		localStorage.setItem('page', page - 1);
		setPage(page -1);
		updateBTNs(page -1);
		dispatch(updatePhotos({page: page - 1, limit: limit}));
	}

	const toFirstPage = () => {
		setPage(1);
		localStorage.setItem('page', '1');
		updateBTNs(1);
		dispatch(updatePhotos({page: 1, limit: limit}));
	}

	return (
		<div className={styles.pagination}>
			<button className={`${styles.button} ${styles.double_left_arrow}`} disabled={doubleLeftArrow} onClick={toFirstPage}/>
			<button className={`${styles.button} ${styles.left_arrow}`} disabled={leftArrow} onClick={toPrevPage}/>
			<button className={styles.button}>
				<span>{page}</span>
			</button>
			<button className={`${styles.button} ${styles.right_arrow}`} disabled={rightArrow} onClick={toNextPage}/>
			<button className={`${styles.button} ${styles.double_right_arrow}`} disabled={doubleRightArrow} onClick={toLastPage}/>
		</div>
	)
}