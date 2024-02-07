import Form from '../form';
import OtherElements from '../other-elements';
import OtherComponents from '../other-components';
import Tables from '../tables';
import { DbTab, DbTabBar } from '@db-ui/react-elements';
import Navigation from '../navigation';

function TabBar() {
  return (
    <DbTabBar>
      <DbTab label="Inputs" name="tab-bar" active>
        <Form />
      </DbTab>
      <DbTab label="Other Elements" name="tab-bar">
        <OtherElements />
      </DbTab>
      <DbTab label="Other Components" name="tab-bar">
        <OtherComponents />
      </DbTab>
      <DbTab label="Tables" name="tab-bar">
        <Tables />
      </DbTab>
      <DbTab label="Navigation" name="tab-bar">
        <Navigation />
      </DbTab>
    </DbTabBar>
  );
}

export default TabBar;
