import { Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo">
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </section>

      <section class="listing-features">
      <h2 class="section-heading">
        About this location
      </h2>
      <ul>
        <li>Units available: {{housingLocation?.availableUnits}}</li>
        <li>Have wi-fi?: {{housingLocation?.wifi}}</li>
        <li>Have laundry?: {{housingLocation?.laundry}}</li>


      </ul>

    </section>
    <section class="listing-apply">
      <h2 class="section-heading">
        Apply now to live here
      </h2>
      <form action="" [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" formControlName="lastName">

        <label for="email">Email</label>
        <input type="email" id="email" formControlName="email">

        <button class="primary" type="submit">Apply now</button>
      </form>
    </section>
    </article>
    
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService= inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm= new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''), 
    email: new FormControl(''),
  });

  constructor(){
    const housingLocationId =Number(this.route.snapshot.params["id"])
    this.housingService.getHousingLocationId(housingLocationId).then(housingLocation=>{
      this.housingLocation=housingLocation;
    });
  }

  submitApplication(){
    this.housingService.submitApplication(
      this.applyForm.value.firstName?? '', 
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
