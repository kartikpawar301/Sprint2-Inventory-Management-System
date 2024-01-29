import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier';
import { Router } from '@angular/router';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.css'
})
export class SupplierListComponent implements OnInit 
{
  suppliers!:Supplier[];

  constructor(private supplierService:SupplierService, private router: Router)
  {

  }

  ngOnInit(): void 
  {
    this.getSuppliers();
  }

  private getSuppliers()
  {
    this.supplierService.getAllSupplierList().subscribe(data=>
      {
        this.suppliers=data;
      }
    );
  }

  supplierDetails(supplierId:number)
  {
    this.router.navigate(['supplier-details', supplierId])
  }

  updateSupplier(supplierId:number)
  {
    this.router.navigate(['update-supplier', supplierId]);
  }

  deleteSupplier(supplierId:number)
  {
    this.supplierService.deleteSupplier(supplierId).subscribe(data=>
      {
        console.log(data);
        this.getSuppliers();
      }
    );
  }

}
