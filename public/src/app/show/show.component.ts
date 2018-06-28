import { Component, OnInit } from '@angular/core';
import { RootService } from '../root.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {

  currentProduct
  error = false

  constructor(private _root: RootService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(
      params => {
        const observable = this._root.retrieveOneProduct(params.idNum)
        observable.subscribe(
          data => {
            this.currentProduct = data[0]
    })});
  }

  delete() {
    this.error = false;
    console.log(this.currentProduct.qty)
    if(this.currentProduct.qty > 0) {
      this.error = true
    }
    else {
      const obs = this._root.deleteProduct(this.currentProduct.idNum)
      obs.subscribe(
        data => { 
          console.log(data)
        },  // Function that runs upon success
        err => { console.log(err) },                // Funtion that runs upon error 
        () => {
          this._router.navigate(['/products']);
        }                                    // Additional function that runs upon success  
      );
    }
  }

}
