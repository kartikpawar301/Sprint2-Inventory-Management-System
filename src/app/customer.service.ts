import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseURL="http://localhost:8080/ims/Customer";
  private addCust="http://localhost:8080/ims/Customer/addCustomer";
  private getAllCust="http://localhost:8080/ims/Customer/getAllCustomer";
  private getCustById="http://localhost:8080/ims/Customer/getCustomerById";
  private getCustByName="http://localhost:8080/ims/Customer/getCustomerByName";
  private updateCust="http://localhost:8080/ims/Customer/editCustomer";
  private deleteCust="http://localhost:8080/ims/Customer/deleteCustomer";

  constructor(private httpClient:HttpClient) { }

  createCustomer(customer:Customer):Observable<Object>
  {
    return this.httpClient.post(`${this.addCust}`, customer)
  }

  getAllCustomerList():Observable<Customer[]>
  {
    return this.httpClient.get<Customer[]>(`${this.getAllCust}`)
  }

  getCustomerById(customerId:number):Observable<Customer>
  {
    return this.httpClient.get<Customer>(`${this.getCustById}/${customerId}`)
  }

  getCustomerByName(customerName:String):Observable<Customer>
  {
    return this.httpClient.get<Customer>(`${this.getCustByName}/${customerName}`)
  }

  updateCustomer(customer:Customer, customerId:number):Observable<Object>
  {
    return this.httpClient.put(`${this.updateCust}/${customerId}`, customer)
  }

  deleteCustomer(customerId:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.deleteCust}/${customerId}`)
  }
}
