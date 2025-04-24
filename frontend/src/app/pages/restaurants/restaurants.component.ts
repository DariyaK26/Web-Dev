import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../../services/restaurant.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants: any[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe(data => {
      console.log('📦 Список ресторанов:', data); // ← это выведет JSON
      this.restaurants = data;
    });
    
  }
  
  
}
