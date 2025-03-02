import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <p>
      about works!
    </p>
  `,
  styleUrl: './about.component.css'
})
export class AboutComponent  implements OnInit{
  constructor(){

  }
  ngOnInit(): void {
    
  }

}
