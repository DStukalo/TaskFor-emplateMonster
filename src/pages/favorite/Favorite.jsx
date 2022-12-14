import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Favorite.module.scss';

export const Favorite = () => {
	const [state, setState] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		if(localStorage.getItem('favorite')) {
			const arrayOfPhoto = localStorage.getItem('favorite').split(';');
			arrayOfPhoto.pop();
			setState(arrayOfPhoto);
		}
	}, []);

	const onClickBtnDelete = (e, curElem) => {
		const newState = state.filter(el => el !== curElem);
		if(newState.length === 0) localStorage.removeItem('favorite')
		else localStorage.setItem('favorite', `${newState.join(';')};`)
		setState(newState);
	}

	const onClickImg = (curElem) => {
		const resultRegEx = curElem.match(/[^id/]+(?:[^/]+)*/g)[2];
		navigate('/more', {
			state: {
				from: {id: resultRegEx,}}
		});
	}

	return (
		<section className={styles.favorite}>
			<div className={styles.container}>
				<section className={styles.favorite__list}>
					{state && state.length > 0 ?
					(state.map((el) => (
						<div key={el} className={styles.favorite__item}>
							<div className={styles.favorite__img} onClick={() => onClickImg(el)}>
								<img src={el} alt="favorite"/>
							</div>
							<button className={styles.favorite__btn} onClick={(e) => onClickBtnDelete(e, el)}>Remove from favorite</button>
						</div>)
					)) :
					(
						<div className={styles.empty}>
							<h2 className={styles.empty__title}>Favorite</h2>
							<p className={styles.empty__description}>You don`t add anything to favorite</p>
						</div>
					)}
				</section>
			</div>
		</section>
	);
};
