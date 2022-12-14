import styles from './ThemeSwitcher.module.scss';
import{ ReactComponent as SunICO } from "./Sun.svg"
import{ ReactComponent as MoonICO } from "./Moon.svg"
import { useState } from 'react';

const initialState = () => {
	let res = 'light';
	const localTheme = localStorage.getItem('theme')
	if(localTheme) res = localTheme;
	console.log(res)
	return res;
}
export const ThemeSwitcher = () => {
	const [theme, setTheme] = useState(initialState());

	const onChangeTheme = () => {
		let nextTheme;
		if (theme === 'light') {
			nextTheme = 'dark';
			setTheme(nextTheme);
		} else {
			nextTheme = 'light';
			setTheme(nextTheme);
		}
		localStorage.setItem('theme', nextTheme)
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