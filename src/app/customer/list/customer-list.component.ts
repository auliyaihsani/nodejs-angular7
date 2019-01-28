import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../customer';
import { CustomerFormComponent } from '../form/customer-form.component';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  listCustomer: Customer[] = [];
  showDetail: boolean = false;
  showAdd: boolean = false;
  selectedCustomer: Customer = new Customer();
  @ViewChild('formCustomer')
  formCustomer: CustomerFormComponent;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.customerService.getList().subscribe(
      (response) => {
        console.log(JSON.stringify(response));
        Object.assign(this.listCustomer, response['values']);
      }, (err) => {
        alert('error :' + JSON.stringify(err));
      });
  }

  selectCustomer(customer: Customer) {
    let copyCustomer = new Customer();
    copyCustomer.id = customer.id;
    copyCustomer.username = customer.username;
    copyCustomer.password = customer.password;
    copyCustomer.firsname = customer.firsname;
    copyCustomer.lastname = customer.lastname;
    copyCustomer.birthdate = customer.birthdate;
    copyCustomer.phonetype = customer.phonetype;
    copyCustomer.phonenumber = customer.phonenumber;
    this.selectedCustomer = copyCustomer;
    this.showDetail = true;
  }

  addCustomer() {
    this.showDetail = true;
  }

 

  prosesResult(result) {
    if (result) {
      this.showDetail = false;
      this.loadData();
    }
  }

  deleteData(id) {
    if (confirm("apakah anda yakin mau hapus data?")) {
      this.customerService.deleteData(id).subscribe(res => {
        location.reload();
      });
    }
  }


}
