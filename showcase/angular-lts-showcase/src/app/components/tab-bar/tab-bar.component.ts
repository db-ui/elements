import { Component } from '@angular/core';
import {
  DbTab,
  DbTabBar
} from '../../../../../../packages/db-ui-elements-angular/projects/lib/src';
import { FormComponent } from '../form/form.component';
import { OtherElementsComponent } from '../other-elements/other-elements.component';
import { OtherComponentsComponent } from '../other-components/other-components.component';
import { TablesComponent } from '../tables/tables.component';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  standalone: true,
  imports: [
    DbTabBar,
    DbTab,
    FormComponent,
    OtherElementsComponent,
    OtherComponentsComponent,
    TablesComponent,
    NavigationComponent
  ]
})
export class TabBarComponent {}
