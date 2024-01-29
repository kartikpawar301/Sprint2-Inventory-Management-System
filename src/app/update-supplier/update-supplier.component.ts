import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrl: './update-supplier.component.css'
})
export class UpdateSupplierComponent implements OnInit 
{
  supplierId!:number;
  supplier:Supplier=new Supplier();

  constructor(private supplierService: SupplierService, private route: ActivatedRoute, private router: Router)
  {

  }

  ngOnInit(): void {
    
    this.supplierId=this.route.snapshot.params['supplierId'];

    this.supplierService.getSupplierById(this.supplierId).subscribe(data=>
      {
        this.supplier=data;
      }, 
      error=>console.log(error));
  }

  onSubmit()
  {
    this.supplierService.updateSupplier(this.supplier, this.supplierId).subscribe(data=>
      {
        this.goToSupplierList();
      }, 
      error=>console.log(error));
  }

  goToSupplierList()
  {
    this.router.navigate(['suppliers'])
  }
  
}
