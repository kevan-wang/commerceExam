import { Component, OnInit } from '@angular/core';
import { RootService } from '../root.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  currentProduct
  errorMessages = [];

  constructor(private _root: RootService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(
      params => {
        console.log("idNum:", params.idNum)
        const observable = this._root.retrieveOneProduct(params.idNum)
        observable.subscribe(
          data => {
            this.currentProduct = data[0]
          })
      }
    )
  }

  reset() {
    this.currentProduct = {
      name: null,
      qty: null,
      price: null
    }
  }

  editProduct() {
    this.validate()
    if(this.errorMessages.length == 0) {
      this.convertFields()
      const obs = this._root.editProduct(this.currentProduct.idNum, this.currentProduct)
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
    this.currentProduct.qty = Number(this.currentProduct.qty)
    this.currentProduct.price = Number(this.currentProduct.price)
  }

  validate() {
    this.errorMessages = []
    if(this.currentProduct.name == null || this.currentProduct.name == "") {
      this.errorMessages.push("A name is required")
    }
    if(this.currentProduct.name.length < 3) {
      this.errorMessages.push("Name length must be at least 3")
    }
    if(isNaN(this.currentProduct.qty)) {
      this.errorMessages.push("Quantity must be a number.")
    }
    else if(Number(this.currentProduct.qty) < 0) {
      this.errorMessages.push("Quantity cannot be negative")
    }
    if(isNaN(this.currentProduct.price)) {
      this.errorMessages.push("Price must be a number.")
    }
    else if(Number(this.currentProduct.price) < 0) {
      this.errorMessages.push("Price cannot be negative")
    }
  }


}
