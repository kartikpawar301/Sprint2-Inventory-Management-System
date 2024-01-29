import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from './supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService 
{
  private baseURL="http://localhost:8080/ims/Supplier";
  private addSupp="http://localhost:8080/ims/Supplier/addSupplier";
  private getAllSupp="http://localhost:8080/ims/Supplier/getAllSupplier";
  private getSuppById="http://localhost:8080/ims/Supplier/getSupplierById";
  private getSuppByName="http://localhost:8080/ims/Supplier/getSupplierByName";
  private updateSupp="http://localhost:8080/ims/Supplier/editSupplier";
  private deleteSupp="http://localhost:8080/ims/Supplier/deleteSupplier";

  constructor(private httpClient:HttpClient) { }

  createSupplier(supplier:Supplier):Observable<Object>
  {
    return this.httpClient.post(`${this.addSupp}`, supplier)
  }

  getAllSupplierList():Observable<Supplier[]>
  {
    return this.httpClient.get<Supplier[]>(`${this.getAllSupp}`)
  }

  getSupplierById(supplierId:number):Observable<Supplier>
  {
    return this.httpClient.get<Supplier>(`${this.getSuppById}/${supplierId}`)
  }

  getSupplierByName(supplierName:String):Observable<Supplier>
  {
    return this.httpClient.get<Supplier>(`${this.getSuppByName}/${supplierName}`)
  }

  updateSupplier(supplier:Supplier, supplierId:number):Observable<Object>
  {
    return this.httpClient.put(`${this.updateSupp}/${supplierId}`, supplier)
  }

  deleteSupplier(supplierId:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.deleteSupp}/${supplierId}`)
  }
  
}
