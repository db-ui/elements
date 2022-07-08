import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import SplitEditor from './editor';
import Playground from './playground';
import Grapes from './grapesjs/grapes';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route
          path={
            process.env.NODE_ENV === 'development'
              ? '/playground-showcase'
              : 'REACT_ROUTER_REPLACE'
          }
          element={<App />}
        >
          <Route path="dnd" element={<Grapes />} />
          <Route path="editor" element={<SplitEditor />} />
          <Route path="" element={<Playground />} />
        </Route>
        <Route
          path="/*"
          element={
            <Navigate
              to={
                process.env.NODE_ENV === 'development'
                  ? '/playground-showcase'
                  : 'REACT_ROUTER_REPLACE'
              }
            />
          }
        />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
