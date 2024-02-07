import '@db-ui/core/dist/css/enterprise/db-ui-core.vars.css';
import './App.css';
import {
  DbBrand,
  DbFooter,
  DbHeader,
  DbLink,
  DbMainnavigation,
  DbPage
} from '@db-ui/react-elements';
// 👆 This is the enterprise theme, even if we do not call it like that here
import { navigationItems } from './components/navigation/items';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <DbPage>
        <DbHeader slot="header">
          <DbBrand src={`${import.meta.env.BASE_URL}/db_logo.svg`} href="/">
            DB UI Elements in React Showcase
          </DbBrand>
          <DbMainnavigation>
            <DbLink href="/" current="page">
              Pages
              {navigationItems.map((item, index) => (
                <DbLink
                  current={navigationItems.indexOf(item) === 0 ? 'page' : false}
                  key={`mainnavigation-item-${index}`}
                >
                  <Link to={item.link}>{item.label}</Link>
                </DbLink>
              ))}
            </DbLink>
          </DbMainnavigation>
          <div />
        </DbHeader>
        <div>
          <Outlet />
        </div>
        <DbFooter slot="footer" copyright border />
      </DbPage>
    </>
  );
}

export default App;
