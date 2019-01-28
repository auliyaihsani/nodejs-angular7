import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../customer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-updatedcustomer',
  templateUrl: './updatedcustomer.component.html',
  styleUrls: ['./updatedcustomer.component.css']
})
export class UpdatedcustomerComponent implements OnInit {
  selectedCustomer: Customer = new Customer();
  listCustomer: Customer[] = [];
  showDetail: boolean = false;
  @Input()
  customer: Customer

  @Output()
  result = new EventEmitter();
  customerupdateFormGroup: FormGroup;

  constructor(private customerService: CustomerService, private formBuilder: FormBuilder) { }

  ngOnInit() {


  }



}
