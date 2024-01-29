import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService 
{
  private baseURL="http://localhost:8080/ims/Product";
  private addProd="http://localhost:8080/ims/Product/addProduct";
  private getAllProd="http://localhost:8080/ims/Product/getAllProduct";
  private getProdById="http://localhost:8080/ims/Product/getProductById";
  private getProdByName="http://localhost:8080/ims/Product/getProductByName";
  private updateProd="http://localhost:8080/ims/Product/editProduct";
  private deleteProd="http://localhost:8080/ims/Product/deleteProduct";
  private getAllProdCategory="http://localhost:8080/ims/Product/getAllProductCategory";
  private getProdByCategory="http://localhost:8080/ims/Product/getProductByCategory";

  constructor(private httpClient:HttpClient) { }

  createProduct(product:Product):Observable<Object>
  {
    return this.httpClient.post(`${this.addProd}`, product)
  }

  getAllProductList():Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(`${this.getAllProd}`)
  }

  getAllProductCategory():Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(`${this.getAllProdCategory}`)
  }

  getProductById(productId:number):Observable<Product>
  {
    return this.httpClient.get<Product>(`${this.getProdById}/${productId}`)
  }

  getProductByName(productName:String):Observable<Product>
  {
    return this.httpClient.get<Product>(`${this.getProdByName}/${productName}`)
  }

  getProductByCategory(productCategory:String):Observable<Product>
  {
    return this.httpClient.get<Product>(`${this.getProdByCategory}/${productCategory}`)
  }

  updateProduct(product:Product, productId:number):Observable<Object>
  {
    return this.httpClient.put(`${this.updateProd}/${productId}`, product)
  }

  deleteProduct(productId:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.deleteProd}/${productId}`)
  }

}
