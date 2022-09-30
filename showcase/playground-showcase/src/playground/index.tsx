import React from 'react';
import { DbButton } from '@db-ui/react-elements';
import { useNavigate } from 'react-router-dom';

function Playground() {
  const navigate = useNavigate();

  return (
    <div>
      <DbButton variant="primary" onClick={() => navigate('dnd')}>
        Drag & Drop Editor
      </DbButton>
      <DbButton variant="secondary" onClick={() => navigate('editor')}>
        Developer Editor
      </DbButton>
    </div>
  );
}

export default Playground;
