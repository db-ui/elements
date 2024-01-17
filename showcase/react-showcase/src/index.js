import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Form from './components/form';
import OtherElements from './components/other-elements';
import OtherComponents from './components/other-components';
import Tables from './components/tables';
import Navigation from './components/navigation';
import TabBar from './components/tab-bar';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="form" element={<Form />} />
          <Route path="elements" element={<OtherElements />} />
          <Route path="components" element={<OtherComponents />} />
          <Route path="tables" element={<Tables />} />
          <Route path="navigation" element={<Navigation />} />
          <Route path="" element={<TabBar />} />
        </Route>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
