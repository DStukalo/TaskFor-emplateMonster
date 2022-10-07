import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../src/img/logo.svg';

import '../../src/styles/components/header.scss'

export const Header = () => {
	return (
		<header className='header'>
			<h1 className='header__logo'>
				<Link to='/'>
						<Logo />
				</Link>
			</h1>
			<nav className="header__navigation">
				<NavLink className='header__navigation-item' end to='/'>Main</NavLink>
				<NavLink className='header__navigation-item' to='/favorite'>Favorite</NavLink>
				<NavLink className='header__navigation-item' to='/about'>About</NavLink>
			</nav>
		</header>
	);
}