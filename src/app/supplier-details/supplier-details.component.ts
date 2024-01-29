import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrl: './supplier-details.component.css'
})
export class SupplierDetailsComponent implements OnInit 
{
  supplierId!:number;
  supplier!:Supplier;

  constructor(private supplierService: SupplierService, private route:ActivatedRoute, private router:Router)
  {

  }

  ngOnInit(): void 
  {
    this.supplierId=this.route.snapshot.params['supplierId'];

    this.supplier=new Supplier();  

    this.supplierService.getSupplierById(this.supplierId).subscribe(data=>
      {
        this.supplier=data;
      }
    );
  }

  list()
  {
    this.router.navigate([`/suppliers`]);
  }
  
}
