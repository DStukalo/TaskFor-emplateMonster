import styles from './AboutPage.module.scss'

export const About = () => {
	return (
		<section className={styles.about}>
			<div className={styles.about__description}>
				<h2 className={styles.about__title}>About APP</h2>
				<p className={styles.about__text}>
					This project was made for a test task. The project is built as a SPA on react using react router. It consists of the main page, a page of favorite photos, an about page, a 404 page, and a page that displays information about an individual photo.
				</p>
				<p className={styles.about__text}>
					The main page is a gallery where photos obtained from the API using fetch are displayed, you can choose the number of photos that will be displayed on the page and there is pagination for navigation. You can add a separate photo to your favorites or see more information about the photo itself, when you click on this link you will be redirected to a separate page with full information.
				</p>
				<p className={styles.about__text}>
					Favorites page contain those photos that have been added to favorites. A 404 page will be displayed if an incorrect address is entered in the address bar of the browser
				</p>
			</div>
		</section>
	);
};