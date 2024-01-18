import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import SplitEditor from './editor';
import Playground from './playground';
import Grapes from './grapesjs/grapes';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="dnd" element={<Grapes />} />
          <Route path="editor" element={<SplitEditor />} />
          <Route path="" element={<Playground />} />
        </Route>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
