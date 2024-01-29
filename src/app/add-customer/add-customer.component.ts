import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  customer: Customer=new Customer();

  constructor(private customerService:CustomerService, private router:Router){}

  saveCustomer()
  {
    this.customerService.createCustomer(this.customer).subscribe(data=>
      {
        console.log(data);
        this.goToCustomerList();
      },
      error => console.log(error)
      );
  }

  goToCustomerList()
  {
    this.router.navigate([`/customers`]);
  }

  onSubmit()
  {
    this.saveCustomer();
  }
  
}
