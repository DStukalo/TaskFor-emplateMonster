import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as FavoriteImage } from '../../../img/heart.svg';
import styles from './PhotoCard.module.scss';

export const PhotoCard = ({id,author, download_url}) => {
	const [favoritePhoto, setFavoritePhoto] = useState([]);
	const isCardFavorite = favoritePhoto.includes(download_url);

	useEffect(()=> {
		const data = localStorage.getItem('favorite') ? localStorage.getItem('favorite').split(';'): [];
		setFavoritePhoto(data);
	}, [])

	const onFavoriteClick = () => {
		if(localStorage.getItem('favorite')){
			const prev = localStorage.getItem('favorite');
			if (!prev.split(';').includes(download_url)){
				localStorage.setItem('favorite',`${prev}${download_url};`);
				setFavoritePhoto(localStorage.getItem('favorite').split(';'))
			} else {
				const current = localStorage.getItem('favorite').split(';');
				current.pop();
				const next = current.filter(el => {
					if(el.includes(',')) {
						const newElem =  el.replace(',', '');
						return newElem !== download_url;
					} else 	return el !== download_url;
				});
				localStorage.setItem('favorite',`${next};`);
				setFavoritePhoto(localStorage.getItem('favorite').split(';'));
			}
		} else {
				localStorage.setItem('favorite', `${download_url};` );
				setFavoritePhoto(localStorage.getItem('favorite').split(';'));
		}
	}

	return (
		<section className={styles.item} >
			<h4 className={styles.item__title}>Author: {author}</h4>
			<Link to='/more' className={styles.item__link} state={{ from: {id} }}>
				<img src={download_url} height='300' width='450' className={styles.item__img} alt='' />
			</Link>
			<div className={styles.item__action}>
				<div className={styles.item__heart} onClick={onFavoriteClick} >
					{ isCardFavorite ? <FavoriteImage fill='#ffae2b'/>: <FavoriteImage fill="#808080"/>}
				</div>
				<Link to='/more' className={styles.item__link} state={{ from: {id} }}>More...</Link>
			</div>
		</section>
	)
}