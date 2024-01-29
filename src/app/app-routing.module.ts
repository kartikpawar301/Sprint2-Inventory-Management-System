import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { UpdateSupplierComponent } from './update-supplier/update-supplier.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddSalesComponent } from './add-sales/add-sales.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesDetailsComponent } from './sales-details/sales-details.component';
import { AddDefectiveItemsComponent } from './add-defective-items/add-defective-items.component';
import { DefectiveItemsListComponent } from './defective-items-list/defective-items-list.component';
import { DefectiveItemsDetailsComponent } from './defective-items-details/defective-items-details.component';
import { UpdateDefectiveItemsComponent } from './update-defective-items/update-defective-items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  {
    path:'', component:LoginComponent, pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },



  {
    path:'dashboard', component:DashboardComponent
  },



  {
    path:'add-supplier', component:AddSupplierComponent
  },
  {
    path:'suppliers',  component:SupplierListComponent
  },
  {
    path:'supplier-details/:supplierId', component:SupplierDetailsComponent
  },
  {
    path:'update-supplier/:supplierId', component:UpdateSupplierComponent
  },



  {
    path:'add-customer', component:AddCustomerComponent
  },
  {
    path:'customers', component:CustomerListComponent
  },
  {
    path:'customer-details/:customerId', component:CustomerDetailsComponent
  },
  {
    path:'update-customer/:customerId', component:UpdateCustomerComponent
  },

  

  {
    path:'add-product', component:AddProductComponent
  },
  {
    path:'products', component:ProductListComponent
  },
  {
    path:'product-details/:productId', component:ProductDetailsComponent
  },
  {
    path:'update-product/:productId', component:UpdateProductComponent
  },



  {
    path:'add-sales', component:AddSalesComponent
  },
  {
    path:'saless', component:SalesListComponent
  },
  {
    path:'sales-details/:saleId', component:SalesDetailsComponent
  },



  {
    path:'add-defective-items', component:AddDefectiveItemsComponent
  },
  {
    path:'defectiveItemss', component:DefectiveItemsListComponent
  },
  {
    path:'defective-items-details/:defectiveItemsId', component:DefectiveItemsDetailsComponent
  },
  {
    path:'update-defective-items/:defectiveItemsId', component:UpdateDefectiveItemsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
