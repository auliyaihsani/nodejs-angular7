import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  @Input()
  customer: Customer;

  @Output()
  result = new EventEmitter();
  customerFormGroup: FormGroup;


  constructor(private customerService: CustomerService, private formBuilder: FormBuilder) { }

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

    this.updateData();
  }

  updateData() {
    this.setDataToForm(this.customer);
  }

  setDataToForm(customer) {
    if (this.customer) {
      this.customerFormGroup.controls['id'].setValue(this.customer.id);
      this.customerFormGroup.controls['firsname'].setValue(this.customer.firsname);
      this.customerFormGroup.controls['username'].setValue(this.customer.username);
      this.customerFormGroup.controls['password'].setValue(this.customer.password);
      this.customerFormGroup.controls['lastname'].setValue(this.customer.lastname);
      this.customerFormGroup.controls['birthdate'].setValue(this.customer.birthdate);
      this.customerFormGroup.controls['phonetype'].setValue(this.customer.phonetype);
      this.customerFormGroup.controls['phonenumber'].setValue(this.customer.phonenumber);
    }
  }


  update() {
    let customer: Customer = new Customer();
    customer.id = this.customerFormGroup.controls['id'].value
    customer.firsname = this.customerFormGroup.controls['firsname'].value
    customer.lastname = this.customerFormGroup.controls['lastname'].value
    customer.username = this.customerFormGroup.controls['username'].value
    customer.password = this.customerFormGroup.controls['password'].value
    customer.birthdate = this.customerFormGroup.controls['birthdate'].value
    customer.phonetype = this.customerFormGroup.controls['phonetype'].value
    customer.phonenumber = this.customerFormGroup.controls['phonenumber'].value

    this.customerService.updateData(customer).subscribe(
      (response) => {
        console.log(JSON.stringify(response));
        this.result.emit(true);
      }, (err) => {
        console.log('error :' + JSON.stringify(err));
      });

  }

}
