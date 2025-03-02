import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template:
  `
  <nav class="list">
  <h2>Album</h2>
  <ul>
    <li><a>Home</a></li>
    <li><a>Albums</a></li>
    <li><a>About</a></li>
  
  
  </ul>
  </nav>

  <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
}
