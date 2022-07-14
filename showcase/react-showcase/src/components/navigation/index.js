import { DbLink, DbSidenavi } from '@db-ui/react-elements';
import React from 'react';
import { navigationItems } from './items';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <p>DbSidenavi:</p>
      <DbSidenavi>
        {navigationItems.map((item, index) => (
          <DbLink
            current={navigationItems.indexOf(item) === 0 ? 'page' : false}
            icon={item.icon}
            key={`sidenavi-item-${index}`}
          >
            <Link to={item.link}>{item.label}</Link>
          </DbLink>
        ))}
      </DbSidenavi>
    </div>
  );
}

export default Navigation;
