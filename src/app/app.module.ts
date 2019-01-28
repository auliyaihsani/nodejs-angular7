import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer/list/customer-list.component';
import { CustomerAddComponent } from './customer/add/customer-add.component';
import { CustomerFormComponent } from './customer/form/customer-form.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatedcustomerComponent } from './customer/updated/updatedcustomer.component';
import { FormComponent } from './account/form/form.component';
import { ListComponent } from './account/list/list.component';
import { AddComponent } from './account/add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerFormComponent,
    NavComponent,
    UpdatedcustomerComponent,
    FormComponent,
    ListComponent,
    AddComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
