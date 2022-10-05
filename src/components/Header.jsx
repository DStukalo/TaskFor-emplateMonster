import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<nav className="navigation">
 			<Link to='/'>Main</Link>
			<Link to='/favorite'>Favorite</Link>
		</nav>
	);
}