import { Component, OnInit } from '@angular/core';
import { Sales } from '../sales';
import { SalesService } from '../sales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrl: './sales-list.component.css'
})
export class SalesListComponent implements OnInit 
{
  saless!:Sales[];

  constructor(private salesService:SalesService, private router: Router)
  {

  }

  ngOnInit(): void 
  {
    this.getSaless();
  }

  private getSaless()
  {
    this.salesService.getAllSalesList().subscribe(data=>
      {
        this.saless=data;
        console.log(data)
        console.log(this.saless)
      }
    );
  }

  salesDetails(saleId:number)
  {
    this.router.navigate(['sales-details', saleId])
  }

  deleteSales(saleId:number)
  {
    this.salesService.deleteSales(saleId).subscribe(data=>
      {
        console.log(data);
        this.getSaless();
      }
    ); 
  }

}
