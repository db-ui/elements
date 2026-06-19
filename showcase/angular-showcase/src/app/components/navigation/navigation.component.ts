import { Component } from '@angular/core';
import { isAreaCurrent, NAVIGATION_ITEMS } from '../../utils/navigation-item';

@Component({
  standalone: false,
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  navigationItems = NAVIGATION_ITEMS;
  isAria = isAreaCurrent;
}
