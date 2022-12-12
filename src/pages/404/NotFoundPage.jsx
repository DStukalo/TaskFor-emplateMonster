import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
	const [second, setSecond] = useState(5);
	const navigate = useNavigate();
	function tic() {
		if (second > 0) setSecond(second - 1);
	}

	function updateTime() {
		const timeId = setInterval(tic, 1000);
		function redirectToWelcome() {
			clearInterval(timeId);
			navigate('/');
		}
		setTimeout(redirectToWelcome, 5000);
	}
	updateTime();

    return (
        <section className={styles.section}>
        <div className={styles.section_text}>
        This page Not Found.
        </div>
        <div className={styles.section_text}> 
        You will be redirected to the home page via
            {' '}
            <span className={styles.section_counter}>{second}</span>
        </div>
    </section>
    );
};
