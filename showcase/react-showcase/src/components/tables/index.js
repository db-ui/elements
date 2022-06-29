import { DbPagination, DbTable } from '@db-ui/react-elements';
import { columnExampleData } from '../../mockData';
import './table.css';
import { useState } from 'react';

const columnExampleDataString = JSON.stringify(columnExampleData);
function Tables() {
  const [pagination, setPagination] = useState(2);
  return (
    <div>
      <p>Pagination (with custom events):</p>
      <DbPagination
        currentpage={pagination}
        pages={9}
        count={3}
        titleprevious="Titel vorher"
        titlenext="Titel nächstes"
        titlepagination="Seitennummer"
        textprevious="Vorher"
        textnext="Nächstes"
        arialabel="test2"
        onDbChange={(evt) => {
          setPagination(evt.detail.target.innerText);
        }}
      />
      <p>Table:</p>
      <p>Table data as object</p>
      <DbTable tabledata={columnExampleData} />
      <p>Table data as string</p>
      <DbTable tabledata={columnExampleDataString} />
    </div>
  );
}

export default Tables;
