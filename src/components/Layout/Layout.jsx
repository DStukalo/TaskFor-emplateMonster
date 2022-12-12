import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './Layout.module.scss';

export const Layout = () => {
  return ( 
    <>
    <Header/>
    <main className={styles.main}>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}