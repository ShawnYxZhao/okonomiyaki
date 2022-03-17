// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Travel from '../pages/Travel';
import Board from '../pages/Board';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="" element={<Home/>}/>
                    <Route path="blog" element={<Blog/>}/>
                    <Route path="travel" element={<Travel/>}/>
                    <Route path="dashboard" element={<Board/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;