import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (<div className='main__wrapper'>
    <Header />
    <div className='container content__container'>
      <Navbar />
      <Profile />
    </div>
  </div>

  );
}


export default App;
