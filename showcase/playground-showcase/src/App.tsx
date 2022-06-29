import React from 'react';
import '@db-ui/core/dist/css/enterprise/db-ui-core.vars.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
