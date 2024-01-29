import { Product } from "./product";
import { Supplier } from "./supplier";

export class DefectiveItems 
{
    defectiveItemsId!:number;
    productId!:number;
    supplierId!:number;
    defectiveQuantity!:number;

    product:Product=new Product;
    supplier:Supplier=new Supplier;
}
