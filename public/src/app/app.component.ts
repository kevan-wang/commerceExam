import { RootService } from './root.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _root: RootService, private _router: Router) {
  }

  ngOnInit() {
    console.log(this._router.url)
    // this._router.navigate(['/products']);
  }

}