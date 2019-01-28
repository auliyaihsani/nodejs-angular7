import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { FormComponent } from '../form/form.component';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listAccount: Account[] = [];
  showDetail: boolean = false;
  selectedAccount: Account = new Account();
  showAdd: boolean = false;
  formaccount: FormComponent;

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.accountService.getListAccount().subscribe(
      (response) => {
        console.log(JSON.stringify(response));
        Object.assign(this.listAccount, response['values']);
      }, (err) => {
        alert('error :' + JSON.stringify(err));
      });

  }

  selectAccount(account: Account) {
    let copyAccount = new Account();
    copyAccount.id = account.id;
    copyAccount.opendate = account.opendate;
    copyAccount.balance = account.balance;

    copyAccount.customerid = account.customerid;
    this.selectedAccount = copyAccount;
    this.showDetail = true;
  }

  prosesResult(result) {
    if (result) {
      this.showDetail = false;
      this.loadData();
    }
  }



}
