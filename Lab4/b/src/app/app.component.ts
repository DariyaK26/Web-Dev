import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, RouterModule, TestComponent],
  template: `

  <main>
  <header class="brand-name">
    Catalog
  </header>
  <section>
    <ul class="category">
      <li class="category-item"><a [routerLink]="['/productlist','Smartphones']">Smartphones</a></li>
      <li class="category-item"><a [routerLink]="['/productlist','Headphones']">Headphones</a></li>
      <li class="category-item"><a [routerLink]="['/productlist','Books']">Books</a></li>
      <li class="category-item"><a [routerLink]="['/productlist','Medicine']">Medicine</a> </li>
      <li class="category-item"><a [routerLink]="[ '' ]">All</a></li>


    </ul>
    
  </section>
  <section class="content">
    <router-outlet>
    </router-outlet>
  </section>
</main>

`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Kaspi';
}