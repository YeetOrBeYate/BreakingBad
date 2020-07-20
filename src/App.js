import React from 'react';
import logo from './logo.svg';
import './styles/app.scss'

import Search from "./comp/Search"
import Layout from "./comp/Layout"

function App() {
  return (
    <div className="App">
      <Search/>
      <Layout/>
    </div>
  );
}

export default App;
