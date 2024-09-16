import React from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Nav from './components/Nav';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;
