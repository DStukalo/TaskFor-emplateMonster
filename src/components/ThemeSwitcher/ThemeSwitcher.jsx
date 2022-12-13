import styles from './ThemeSwitcher.module.scss';
import{ ReactComponent as SunICO } from "./Sun.svg"
import{ ReactComponent as MoonICO } from "./Moon.svg"
import { useState } from 'react';

export const ThemeSwitcher = () => {
	const [theme, setTheme] = useState('light');

	const onChangeTheme = () => {
		let nextTheme;
		if (theme === 'light') {
			nextTheme = 'dark';
			setTheme(nextTheme);
		} else {
			nextTheme = 'light';
			setTheme(nextTheme);
		}
		document.documentElement.setAttribute("data-theme", nextTheme);
	}

	return (
		// <div >
			<button onClick={onChangeTheme} className={styles.toggler}>
				{ theme === 'dark' ? 
				<MoonICO /> :
				<SunICO fill='#fff' /> 
				}
			</button>
		// </div>
	)
}