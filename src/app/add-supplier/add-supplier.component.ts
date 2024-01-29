import { Component } from '@angular/core';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrl: './add-supplier.component.css'
})
export class AddSupplierComponent 
{
  supplier: Supplier=new Supplier();

  constructor(private supplierService:SupplierService, private router:Router){}

  saveSupplier()
  {
    this.supplierService.createSupplier(this.supplier).subscribe(data=>
      {
        console.log(data);
        this.goToSupplierList();
      },
      error => console.log(error)
      );
  }

  goToSupplierList()
  {
    this.router.navigate([`/suppliers`]);
  }

  onSubmit()
  {
    this.saveSupplier();
  }

}
