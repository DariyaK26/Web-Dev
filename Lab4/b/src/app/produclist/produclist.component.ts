import { Component, inject, OnInit } from '@angular/core';
import { Products } from '../products';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductitemComponent } from '../productitem/productitem.component';
import { ProdService } from '../prod.service';


@Component({
  selector: 'app-produclist',
  imports: [RouterModule, CommonModule, ProductitemComponent],
  template: `
    <section class="results">
    <ng-container *ngFor="let product of ProductList">
  <app-productitem *ngIf="product.category === ProdCategory" [products]="product">
  </app-productitem>
</ng-container>

    </section>


    
  `,
  styleUrl: './produclist.component.css'
})
export class ProduclistComponent implements OnInit {
  ProductList: Products[]=[];
  prodService: ProdService=inject(ProdService);

  ProdCategory:string='';
  constructor(private route:ActivatedRoute){this.prodService.getAllProducts().then((ProductList: Products[]) => {
    this.ProductList = ProductList;
  });}

  ngOnInit(){
    this.route.params.subscribe(params => this.ProdCategory=params['category'])
  }

 
  


  

}
