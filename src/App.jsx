import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Layout } from './components/Layout/Layout';
import { Favorite } from './pages/favorite/Favorite';
import { Main } from './pages/main/Main';
import { More } from './pages/more/MorePage';
import { About } from './pages/about/AboutPage';
import { NotFoundPage } from './pages/404/NotFoundPage';
import store from './store/store';


function App() {
	return (
		<Provider store={store}>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Main />} />
					<Route path='favorite' element={<Favorite />} />
					<Route path='more' element={<More />} />
					<Route path='about' element={<About />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</Provider>
    );
}

export default App;
