import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main'
import './style.scss';
import 'tachyons';
import 'ipfs-css';

const App = () => (
  <div className='vh-100'>
    <Header />
    <div className="flex h-100">
      <Nav />
      <Main />
    </div>
  </div>
);

export default App;
