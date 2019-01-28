import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../account/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getListAccount() {
    return this.httpClient.get('http://localhost:3000/accounts');
  }

  updateAccount(account: Account) {
    return this.httpClient.put('http://localhost:3000/:id', account);
  }

  postAccount(account: Account) {
    return this.httpClient.post('http://localhost:3000/account', account)
  }

  deleteAccount(idAccount) {
    return this.httpClient.delete('http://localhost:3000/account/:id' + idAccount);
  }

}

