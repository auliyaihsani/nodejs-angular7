import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CustomerAddComponent } from './customer/add/customer-add.component';
import { CustomerListComponent } from './customer/list/customer-list.component';
import { UpdatedcustomerComponent } from './customer/updated/updatedcustomer.component';
import { ListComponent } from './account/list/list.component';
import { AddComponent } from './account/add/add.component';
import { FormComponent } from './account/form/form.component';

const routes: Routes = [
  {
    path: 'app-nav',
    component: NavComponent
  },
  {
    path: 'app-customer-add',
    component: CustomerAddComponent
  },
  {
    path: 'app-customer-list',
    component: CustomerListComponent
  },
  {
    path: 'app-updatedcustomer',
    component: UpdatedcustomerComponent
  },
  {
    path: 'app-list',
    component: ListComponent
  },
  {
    path: 'app-add',
    component: AddComponent
  },
  {
    path: 'app-form',
    component: FormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
