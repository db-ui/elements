import { Component } from '@angular/core';
import { columnExampleData } from './mockData';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html'
})
export class TablesComponent {
  columnExampleData;
  columnExampleDataString = JSON.stringify(columnExampleData);

  currentPage = 2;

  logEvent(event) {
    // eslint-disable-next-line no-console
    console.log('PagEvent: ', event);
  }
}
