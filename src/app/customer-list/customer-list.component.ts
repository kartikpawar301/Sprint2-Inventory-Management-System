import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit 
{
  customers!:Customer[];

  constructor(private customerService:CustomerService, private router: Router)
  {

  }

  ngOnInit(): void 
  {
    this.getCustomers();
  }

  private getCustomers()
  {
    this.customerService.getAllCustomerList().subscribe(data=>
      {
        this.customers=data;
      }
    );
  }

  customerDetails(customerId:number)
  {
    this.router.navigate(['customer-details', customerId])
  }

  updateCustomer(customerId:number)
  {
    this.router.navigate(['update-customer', customerId]);
  }

  deleteCustomer(customerId:number)
  {
    this.customerService.deleteCustomer(customerId).subscribe(data=>
      {
        console.log(data);
        this.getCustomers();
      }
    );
  }

}
