import { Component } from '@angular/core';
import { columnExampleData } from './mockData';
import {
  DbTable,
  DbPagination
} from '../../../../../../packages/db-ui-elements-angular/projects/lib/src';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  standalone: true,
  imports: [DbTable, DbPagination, FormsModule]
})
export class TablesComponent {
  columnExampleDataString = JSON.stringify(columnExampleData);

  currentPage = 2;

  logEvent(event: any) {
    // eslint-disable-next-line no-console
    console.log('PagEvent: ', event);
  }
}
