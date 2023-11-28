import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { PRODUCTS } from '../shared/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=PRODUCTS;

  getProduct(ref:String){
    return <Product>this.products.find(product => product.reference===ref);
  }

  getAllProducts(){
    return this.products;
  }
  changeQte(index :number, qte:number){
    this.products[index].stockQte -=qte;
  }
  constructor() { }
}
