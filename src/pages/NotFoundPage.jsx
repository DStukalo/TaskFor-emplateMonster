import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <section>
        <div>
        This page Not Found.
        </div>
        <div>
        You will be redirected to the home page via
            {' '}
            <span>{second}</span>
        </div>
    </section>
    );
};
