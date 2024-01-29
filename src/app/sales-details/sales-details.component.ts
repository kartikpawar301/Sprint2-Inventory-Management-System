import { Component, OnInit } from '@angular/core';
import { Sales } from '../sales';
import { SalesService } from '../sales.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sales-details',
  templateUrl: './sales-details.component.html',
  styleUrl: './sales-details.component.css'
})
export class SalesDetailsComponent implements OnInit 
{
  saleId!:number;
  sales!:Sales;

  constructor(private salesService: SalesService, private route:ActivatedRoute, private router:Router)
  {

  }

  ngOnInit(): void 
  {
    this.saleId=this.route.snapshot.params['saleId'];

    this.sales=new Sales();  

    this.salesService.getSalesById(this.saleId).subscribe(data=>
      {
        this.sales=data;
      }
    );
  }

  list()
  {
    this.router.navigate([`/saless`]);
  }

}
