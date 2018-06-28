import { Component, OnInit } from '@angular/core';
import { RootService } from '../root.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  allProducts;

  constructor(private _root: RootService) {
    const observable = this._root.retrieveProducts()
    observable.subscribe( 
      data => { 
        this.allProducts = data
      },  // Function that runs upon success
      err => { console.log(err) },                // Funtion that runs upon error 
      () => {}                                    // Additional function that runs upon success
    );
  }

  ngOnInit() {
  }

}
