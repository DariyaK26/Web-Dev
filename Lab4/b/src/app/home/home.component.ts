import { Component, inject } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { Products } from '../products';
import { CommonModule } from '@angular/common';
import { ProdService } from '../prod.service';

@Component({
  selector: 'app-home',
  imports: [ProductsComponent, CommonModule],
  template:`
  

  <section class="results">
    <app-products *ngFor="let product of ProductList" [products]="product">
    </app-products>
  </section>


  
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ProductList: Products[]=[
    
  ];
  prodService: ProdService=inject(ProdService);


  constructor(){
    this.prodService.getAllProducts().then((ProductList: Products[]) => {
      this.ProductList = ProductList;
    });
  }



}
