import { Component } from '@angular/core';
//import { PRODUCTS } from '../shared/products';
import { Product } from '../shared/product';
import { OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
color! :String;
datejour! :Date;
message! : String;
products! : Product[];


constructor(private servProd:ProductService) { }

ngOnInit(){
  this.color="black";
  this.datejour=new Date();
  this.message="";
  this.products=this.servProd.getAllProducts();
 // this.products=PRODUCTS;
}
qte : number[]=[0,0,0,0];
total : number[]=[0,0,0,0];
finalTotal=0;

addCommand(index : number){
  this.total[index]=this.products[index].unitPrice*this.qte[index];
}
/*changeQte(index :number){
  this.products[index].stockQte -=this.qte[index];
}*/
order(){
  for(let i=0;i<4;i++){
    this.finalTotal +=this.total[i];
    if(this.total[i]!=0){
      //this.changeQte(i);
      this.servProd.changeQte(i,this.qte[i]);
    }  
    this.qte[i]=0;
    this.total[i]=0;
  }
}

/*modifier(){
  this.message="vous avez cliqué sur le bouton"
  this.color="red";
}*/
}




/*
addCommand(index){
    this.total[index]=this.products[index].unitPrice*this.qte[index];
  }
*/


/* order(){
   this.finalTotal=0;
    for(let i=0;i<4;i++){
      this.finalTotal+=this.total[i];
      this.servProd.changeQte(i,this.qte[i]);
      this.qte[i]=0;
      this.total[i]=0;
    }
  }*/
  
  /*changeQte(index, qte){
    if(this.products[index].stockQte>=qte){
      this.products[index].stockQte-=qte;
    }  
  }*/