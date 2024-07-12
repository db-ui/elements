import { Component } from '@angular/core';
import {
  DbLinklist,
  DbButton,
  DbNotification,
  DbNotifications,
  DbLink,
  DbIcon
} from '../../../../../../packages/db-ui-elements-angular/projects/lib/src';

@Component({
  selector: 'app-other-components',
  templateUrl: './other-components.component.html',
  styleUrls: ['other-components.component.css'],
  standalone: true,
  imports: [
    DbButton,
    DbNotification,
    DbNotifications,
    DbLink,
    DbLinklist,
    DbIcon
  ]
})
export class OtherComponentsComponent {
  notification: boolean = false;
}
