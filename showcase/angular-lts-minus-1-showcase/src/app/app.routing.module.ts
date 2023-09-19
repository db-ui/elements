import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { FormComponent } from './components/form/form.component';
import { OtherElementsComponent } from './components/other-elements/other-elements.component';
import { OtherComponentsComponent } from './components/other-components/other-components.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TablesComponent } from './components/tables/tables.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'elements', component: OtherElementsComponent },
  { path: 'components', component: OtherComponentsComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'tables', component: TablesComponent },
  { path: '', component: TabBarComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
