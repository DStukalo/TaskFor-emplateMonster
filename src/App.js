import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import { Layout } from './components/Layout';
import { Favorite } from './pages/Favorite';
import { Main } from './pages/Main';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path='favorite' element={<Favorite />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
