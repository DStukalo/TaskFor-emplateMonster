import '../../src/styles/components/footer.scss'

export const Footer = () => {
	return (
    <footer className='footer'>
      <div className='footer__item'>
        <a href="https://www.linkedin.com/in/dmytro-stukalo-799b50250/">Author →</a>
      </div>
      <div className='footer__item'>
      2022 <sup>&#169;</sup>
      </div>
    </footer>
	);
}