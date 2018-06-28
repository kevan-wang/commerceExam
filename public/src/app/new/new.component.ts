import { Component, OnInit } from '@angular/core';
import { RootService } from '../root.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newProduct;
  errorMessages = [];

  constructor(private _root: RootService, private _router: Router) {
    this.newProduct = {
      name: null,
      qty: null,
      price: null
    }
  }

  ngOnInit() {
  }

  reset() {
    this.newProduct = {
      name: null,
      qty: null,
      price: null
    }
  }

  addProduct() {
    this.validate()
    if(this.errorMessages.length == 0) {
      this.convertFields()
      const obs = this._root.addProduct(this.newProduct)
      obs.subscribe(
        data => {
          console.log(data)
        },
        err => { console.log(err) },
        () => {
          this._router.navigate(['/products']);
        }
      )
    }
  }

  convertFields() {
    this.newProduct.qty = Number(this.newProduct.qty)
    this.newProduct.price = Number(this.newProduct.price)
  }

  validate() {
    this.errorMessages = []
    if(this.newProduct.name == null || this.newProduct.name == "") {
      this.errorMessages.push("A name is required")
    }
    if(this.newProduct.name.length < 3) {
      this.errorMessages.push("Name length must be at least 3")
    }
    if(isNaN(this.newProduct.qty)) {
      this.errorMessages.push("Quantity must be a number.")
    }
    else if(Number(this.newProduct.qty) < 0) {
      this.errorMessages.push("Quantity cannot be negative")
    }
    if(isNaN(this.newProduct.price)) {
      this.errorMessages.push("Price must be a number.")
    }
    else if(Number(this.newProduct.price) < 0) {
      this.errorMessages.push("Price cannot be negative")
    }
  }

}
