import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  @Input()
  customer: Customer;

  @Output()
  result = new EventEmitter();
  customerFormGroup: FormGroup;

  constructor(private customerService: CustomerService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.customerFormGroup = this.formBuilder.group({
      id: [''],
      username: [''],
      password: [''],
      firsname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthdate: ['', Validators.required],
      phonetype: ['', Validators.required],
      phonenumber: ['', Validators.required]
    });
  }



  submitData() {

    let customer: Customer = new Customer;

    customer.username = this.customerFormGroup.controls['username'].value;
    customer.password = this.customerFormGroup.controls['password'].value;
    customer.firsname = this.customerFormGroup.controls['firsname'].value;
    customer.lastname = this.customerFormGroup.controls['lastname'].value;
    customer.birthdate = this.customerFormGroup.controls['birthdate'].value;
    customer.phonetype = this.customerFormGroup.controls['phonetype'].value;
    customer.phonenumber = this.customerFormGroup.controls['phonenumber'].value;
    // console.log(this.customerFormGroup.controls['username'].value);

    // alert('test');



    this.customerService.postData(customer).subscribe(
      (response) => {
        console.log(JSON.stringify(response));
        this.router.navigate(['/app-customer-list']);

      }, (err) => {
        console.log('error :' + JSON.stringify(err));
      });

  }

  cencelChanges() {
    this.result.emit(true);
  }



}
