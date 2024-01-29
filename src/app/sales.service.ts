import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sales } from './sales';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService 
{
  private baseURL="http://localhost:8080/ims/Sales";
  private addSal="http://localhost:8080/ims/Sales/addSales";
  private getAllSal="http://localhost:8080/ims/Sales/getAllSales";
  private getSalById="http://localhost:8080/ims/Sales/getSalesById";
  private deleteSal="http://localhost:8080/ims/Sales/deleteSales";

  constructor(private httpClient:HttpClient) 
  { 

  }

  createSales(sales:Sales):Observable<Object>
  {
    return this.httpClient.post(`${this.addSal}`, sales)
  }

  getAllSalesList():Observable<Sales[]>
  {
    return this.httpClient.get<Sales[]>(`${this.getAllSal}`)
  }

  getSalesById(saleId:number):Observable<Sales>
  {
    return this.httpClient.get<Sales>(`${this.getSalById}/${saleId}`)
  }

  deleteSales(saleId:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.deleteSal}/${saleId}`)
  }

}
