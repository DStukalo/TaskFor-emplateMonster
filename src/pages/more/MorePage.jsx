import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

import { Preloader } from '../../components/Preloader/Preloader'
import styles from './MorePage.module.scss';

export const More = () => {
	const location = useLocation();
	const { from } = location.state;
	const [photo, setPhoto] = useState(null); 
	const navigate = useNavigate();

	useEffect(()=> {
		const fetchData = async () => {
				const response = await fetch(`https://picsum.photos/id/${from.id}/info`);
				const data = await response.json();
				setPhoto(data);
		}
		fetchData();
	}, [from]);

	const onClickBtn = () => {
		navigate(-1);
	}

	return (
		<section className={styles.wrapper}>
			<header className={styles.header} >
				<button className={styles.header__btn} onClick={onClickBtn}>Go back</button>
				<h3 className={styles.header__title} >Photo from id {from.id}</h3>
				<div></div>
			</header>
			{photo ? 
				<section className={styles.more}>
					<div className={styles.more__img}>
						<img src={photo.download_url} alt=''/>
					</div>
					<div className={styles.more__description}>
						<h4 className={styles.more__title}>Author: {photo.author}</h4>
						<p className={styles.more__text}><a href={photo.url}>Photo on Unsplash →</a></p>
						<p className={styles.more__text}> Width real photo : {photo.width}</p>
						<p className={styles.more__text}> Height real photo : {photo.height}</p>
					</div>
					</section>
				: <Preloader />
			}
		</section>
	);
};
