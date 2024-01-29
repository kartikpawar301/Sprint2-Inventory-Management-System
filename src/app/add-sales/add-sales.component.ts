import { Component } from '@angular/core';
import { Sales } from '../sales';
import { SalesService } from '../sales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrl: './add-sales.component.css'
})
export class AddSalesComponent 
{
  sales: Sales=new Sales();

  constructor(private salesService:SalesService, private router:Router)
  {
    
  }

  saveSales()
  {
    this.salesService.createSales(this.sales).subscribe(data=>
      {
        console.log(data);
        this.goToSalesList();
      },
      error => console.log(error)
      );
  }

  goToSalesList()
  {
    this.router.navigate([`/saless`]);
  }

  onSubmit()
  {
    this.saveSales();
  }
}
