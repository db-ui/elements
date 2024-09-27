import { Routes } from '@angular/router';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { FormComponent } from './components/form/form.component';
import { OtherElementsComponent } from './components/other-elements/other-elements.component';
import { OtherComponentsComponent } from './components/other-components/other-components.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TablesComponent } from './components/tables/tables.component';

export const routes: Routes = [
  { path: 'form', component: FormComponent, pathMatch: 'full' },
  { path: 'elements', component: OtherElementsComponent, pathMatch: 'full' },
  {
    path: 'components',
    component: OtherComponentsComponent,
    pathMatch: 'full'
  },
  { path: 'navigation', component: NavigationComponent, pathMatch: 'full' },
  { path: 'tables', component: TablesComponent, pathMatch: 'full' },
  { path: '', component: TabBarComponent, pathMatch: 'full' }
];
