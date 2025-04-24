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
  filteredRestaurants: any[] = [];
  search: string = ''; // ← добавлено!

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe({
      next: (data) => {
        this.restaurants = data;
        this.filteredRestaurants = data;
      },
      error: () => alert('Ошибка загрузки ресторанов')
    });
  }

  onSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.search = input.value;

    if (this.search) {
      this.filteredRestaurants = this.restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(this.search.toLowerCase()) ||
        restaurant.location.toLowerCase().includes(this.search.toLowerCase())
      );
    } else {
      this.filteredRestaurants = this.restaurants;
    }
  }
}

