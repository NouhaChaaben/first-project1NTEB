import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/product';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../shared/comment';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  product!:Product;
  comment:Comment={rating:0,comment:"",date:new Date()+""};

  constructor(private serProd:ProductService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    
    const ref:String = this.route.snapshot.params['reference'];
    this.product=this.serProd.getProduct(ref);
  }


}
