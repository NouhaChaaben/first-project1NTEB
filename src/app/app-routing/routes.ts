import { Routes } from "@angular/router"
import { HomeComponent } from "../home/home.component";
import { ProductsComponent } from "../products/products.component";
import { ContactComponent } from "../contact/contact.component";
import { ProductDetailComponent } from "../product-detail/product-detail.component";

export const routes: Routes=[
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'productdetail/:reference', component: ProductDetailComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];