import { Component } from '@angular/core';
import { isAreaCurrent, NAVIGATION_ITEMS } from '../../utils/navigation-item';
import {
  DbLink,
  DbSidenavi
} from '../../../../../../packages/db-ui-elements-angular/projects/lib/src';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  standalone: true,
  imports: [DbSidenavi, DbLink, RouterLink]
})
export class NavigationComponent {
  navigationItems = NAVIGATION_ITEMS;
  isAria = isAreaCurrent;
}
