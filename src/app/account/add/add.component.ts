import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Customer } from 'src/app/customer/customer';
import { AccountService } from '../account.service';
import { CustomerService } from 'src/app/customer/customer.service';
import { Router } from '@angular/router';
import { Account } from '../account';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  customer: Object;
  // accountFormGroups: FormGroup;

  @Input()
  account: Account;

  @Output()
  result = new EventEmitter();

  listCustomer: Customer[] = [];
  listAccount: Account[] = [];

  accountFormGroups: FormGroup;

  constructor(private accountService: AccountService, private formBuilder: FormBuilder, private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.accountFormGroups = this.formBuilder.group({
      // id: [''],
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

  submitAccount() {
    let account = new Account();

    // account.id = this.accountFormGroups.controls['id'].value
    account.balance = this.accountFormGroups.controls['balance'].value;
    account.opendate = this.accountFormGroups.controls['opendate'].value;

    let customer = new Customer();
    customer.id = this.accountFormGroups.controls['customer'].value;
    // alert(account.id);
    account.customerid = customer;
    this.accountService.postAccount(account).subscribe(
      (response) => {
        console.log(JSON.stringify(response['values']));
        // this.result.emit(true);
        this.router.navigate(['/app-list']);
      }, (err) => {
        console.log('err :' + JSON.stringify(err));
      });
  }

}
