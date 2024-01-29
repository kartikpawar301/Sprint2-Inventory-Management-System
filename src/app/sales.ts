import { Customer } from "./customer";
import { Product } from "./product";

export class Sales 
{
    saleId!:number;
    customerId!:number;
    productId!:number;
    purchaseDate!:Date;
    totalAmount!:number;

    product:Product=new Product;
    customer:Customer=new Customer;
}
