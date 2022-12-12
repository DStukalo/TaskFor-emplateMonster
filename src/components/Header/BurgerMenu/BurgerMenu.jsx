import styles from './BurgerMenu.module.scss';

export const BurgerMenu = ({isMenuOpen, clickHandler}) => {
	return (
		<div className={`${styles.burger} ${(isMenuOpen ? styles.active : '')}`} onClick={clickHandler}>
			<span className={styles.line}/>
			<span className={styles.line}/>
			<span className={styles.line}/>
		</div>
	);
};