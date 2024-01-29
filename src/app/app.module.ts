import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { UpdateSupplierComponent } from './update-supplier/update-supplier.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddSalesComponent } from './add-sales/add-sales.component';
import { SalesDetailsComponent } from './sales-details/sales-details.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import { AddDefectiveItemsComponent } from './add-defective-items/add-defective-items.component';
import { UpdateDefectiveItemsComponent } from './update-defective-items/update-defective-items.component';
import { DefectiveItemsDetailsComponent } from './defective-items-details/defective-items-details.component';
import { DefectiveItemsListComponent } from './defective-items-list/defective-items-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    AddSupplierComponent,
    SupplierDetailsComponent,
    SupplierListComponent,
    UpdateSupplierComponent,
    AddCustomerComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    UpdateCustomerComponent,
    AddProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
    UpdateProductComponent,
    AddSalesComponent,
    SalesDetailsComponent,
    SalesListComponent,
    AddDefectiveItemsComponent,
    UpdateDefectiveItemsComponent,
    DefectiveItemsDetailsComponent,
    DefectiveItemsListComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
