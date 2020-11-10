import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/age-test/test.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AngularMaterialModule} from './angular-material.module';
import {CommonModule} from '@angular/common';
import {AddPersonComponent} from './components/add-person/add-person.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PersonTableComponent,
    AddPersonComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
