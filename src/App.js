import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import DashBoard from './components/DashBoard/DashBoard'
import Blogs from './components/Blogs/Blogs'
import Abouts from './components/Abouts/Abouts'
import NotFound from './components/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashBoard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/abouts' element={<Abouts></Abouts>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
