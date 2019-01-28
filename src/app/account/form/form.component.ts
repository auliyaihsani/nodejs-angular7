import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Customer } from 'src/app/customer/customer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer/customer.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input()
  account: Account;
  customer: Customer;

  @Output()
  result = new EventEmitter();
  accountFormGroups: FormGroup;
  listCustomer: Customer[] = [];
  // listAccount: Account[] = [];

  constructor(private accountService: AccountService, private formBuilder: FormBuilder, private customerService: CustomerService, private router: Router ) { }

  ngOnInit() {
    this.accountFormGroups = this.formBuilder.group({
       id: [''],
       opendate: ['', Validators.required],
       balance: ['', Validators.required],
       customer: ['']

    });
    this.getCustomer();

  }

  getCustomer() {
    this.customerService.getList().subscribe((response) => {
      this.customer;
      console.log(this.customer);
      Object.assign(this.listCustomer, response['values']);
    }, (err) => {
      console.log("err:" + JSON.stringify(err));
    });
  }

  setDataToForm(account) {
    if (this.account) {     
     
    }
  }

}
