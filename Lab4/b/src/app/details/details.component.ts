import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdService } from '../prod.service';
import { Products } from '../products';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute= inject(ActivatedRoute);
  prodService=inject(ProdService);
  product: Products | undefined;

  constructor(){
    const productId= Number(this.route.snapshot.params["id"]);
    this.prodService.getProductById(productId).then(Product =>{
      this.product=Product;
    });
  }

}