import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Products } from '../products';


@Component({
  selector: 'app-productitem',
  imports: [RouterModule, CommonModule],
  template: `
    
    <section class="listing" *ngIf="isActive">
      <section class='image'>
    <img [src]="products.imageUrls" alt="Photo of {{products.name}}" class="listing-photo"></section>
    <h2 class="listing-name">{{products.name}}</h2>
    <p class="listing-description">{{products.description}}</p>
    <p class="listing-rate">rating: {{products.rating}}</p>
    
    <a [routerLink]="['/details',products.id]">More</a>
    <button (click)="increase()"  >like
</button>
<p>{{products.like}}
</p>

<button (click)="toggleClass()" >Delete</button>
    
  </section>
  
  `,
  styleUrl: './productitem.component.css'
})
export class ProductitemComponent {
  @Input() products!:Products;
  isActive: boolean = true;
  like: number=0;
  increase(){
    this.products.like++;
  }

  toggleClass(){
    this.isActive = !this.isActive

  }


}
