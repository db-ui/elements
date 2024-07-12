import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { OtherComponentsComponent } from './components/other-components/other-components.component';
import { OtherElementsComponent } from './components/other-elements/other-elements.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { TablesComponent } from './components/tables/tables.component';
import { AppRoutingModule } from './app.routing.module';
import { DbButton } from '../../../../packages/db-ui-elements-angular/projects/lib/src';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavigationComponent,
    OtherComponentsComponent,
    OtherElementsComponent,
    TabBarComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    DbButton
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
