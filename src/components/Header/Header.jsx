import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

import { ReactComponent as Logo } from '../../../src/img/logo.svg';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import styles from './Header.module.scss';

export const Header = () => {
	const [ isMenuOpen, toggleMenuMode ] = useState(false);

	const clickHandlerBtn = () => {
		if(isMenuOpen) toggleMenuMode(!isMenuOpen);
	};

	const clickHandler = () => {
		toggleMenuMode(!isMenuOpen);
	};

	return (
		<header className={styles.header}>
			<h1 className={styles.header__logo}>
				<Link to='/'>
						<Logo />
				</Link>
			</h1>
			<nav className={styles.header__navigation} >
				<ul className={`${(isMenuOpen ? styles.open : styles.navigation__list)}`}>
					<li className={styles.navigation__item}>
						<NavLink className={({ isActive }) => (isActive ? `${styles.active_link}` : `${styles.header__navigation_item}`)} end to='/' onClick={clickHandlerBtn}>Main</NavLink>
					</li>
					<li className={styles.navigation__item}>
						<NavLink className={({ isActive }) => (isActive ? `${styles.active_link}` : `${styles.header__navigation_item}`)} to='/favorite' onClick={clickHandlerBtn}>Favorite</NavLink>
					</li>
					<li className={styles.navigation__item}>
						<NavLink className={({ isActive }) => (isActive ? `${styles.active_link}` : `${styles.header__navigation_item}`)} to='/about' onClick={clickHandlerBtn}>About</NavLink>
					</li>
				</ul>
				<BurgerMenu isMenuOpen={isMenuOpen} clickHandler={clickHandler}/>
			</nav>
		</header>
	);
}

