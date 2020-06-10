import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main'
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
