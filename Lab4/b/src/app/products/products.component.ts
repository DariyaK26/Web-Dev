import { Component, Input } from '@angular/core';
import { Products } from '../products';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule],
  template:`
  <section class="listing">
    <section class='image'>
    <img [src]="products.imageUrls" alt="Photo of {{products.name}}" class="listing-photo"></section>
    <h2 class="listing-name">{{products.name}}</h2>
    <p class="listing-description">{{products.description}}</p>
    <p class="listing-rate">rating: {{products.rating}}</p>
    
    <a [routerLink]="['/details',products.id]">More</a>
  </section>
  `,
  styleUrl: './products.component.css'
})
export class ProductsComponent {
@Input() products!:Products;
}