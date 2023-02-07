import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import App from './components/App';
import Jokes from './components/Jokes';
import './index.css';
import baseRelativePath from './path';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter history={createBrowserHistory()}>
    <Routes>
      <Route path={`${baseRelativePath}/`} element={<Header><App /></Header>} />
      <Route path={`${baseRelativePath}/jokes`} element={<Header><Jokes /></Header>} />
    </Routes>
  </BrowserRouter>
);
