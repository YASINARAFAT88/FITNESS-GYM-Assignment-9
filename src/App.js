import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import DashBoard from './components/DashBoard/DashBoard'
import Blogs from './components/Blogs/Blogs'
import Abouts from './components/Abouts/Abouts'
import NotFound from './components/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';

import { createContext, useEffect, useState } from 'react';

export const HooksContext = createContext('data')

function App() {
  const [reviews, setReviews] = useState([]);
  

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <div>
      <Header></Header>
      <HooksContext.Provider value={reviews}>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashBoard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/abouts' element={<Abouts></Abouts>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      </HooksContext.Provider>
    </div>
  );
}

export default App;
