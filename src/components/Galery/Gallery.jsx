import { useSelector } from 'react-redux'

import { PhotoCard } from './PhotoCard/PhotoCard'
import { Preloader } from '../Preloader/Preloader'
import styles from './Gallery.module.scss'

export const Gallery = () => {
	const {photos, isLoading, error} = useSelector(state => state.photos);

	return (
		<section className={styles.gallery}>
			{!isLoading ?
				(photos && photos.map(({id,author, download_url}) => (
					<PhotoCard key={id} id={id} author={author} download_url={download_url}/>
				))) : null
			}
			{error && <div>{error}</div>}
			{isLoading ? ( <Preloader />) : null}
</section>
	)
}