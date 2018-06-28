// npm install --save body-parser express mongoose mongoose-validator mysql socket.io express-flash
// npm install --save-dev @types/express debug supports-color ts-node typescript

// =============== EXPRESS ===============

const express = require('express');
const app = express()


// =============== PATH ===============

const path = require('path');


// =============== MONGOOSE ===============

require('./server/config/mongoose.config.js')


// =============== BODY PARSER ===============

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }) );


// =============== EXPRESS SESSION ===============

// =============== EXPRESS FLASH ===============

// =============== SERVER CONFIG ===============

app.listen(8000, function() {
    console.log("listening on port 8000");
})


// =============== STATIC ROUTES ===============

app.use(express.static(path.join(__dirname, 'public/dist/public')))


// =============== ROUTES ===============

const routes = require('./server/config/routes.config.js');
routes(app);
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });







// 1) Create the service by:
// 	*Navigate to public > src > app folder
// 	CONSOLE: ng g s http	// calling it http for now but we can name it whatever we like
// 2) REGISTER by 
// 	go to app.module.ts and 
// 	import { HttpService } from "./http.service";  // correct path (same folder), 
// 	add HttpService to array of providers in @NgModule
// 	*Service can fetch things from our database.
// 3) Set up HTTP CLIENT:
// 	still in app.module.ts
// 	import { HttpClientModule } from '@angular/common/http';	// alt:  HttpModule from '@angular/http' 
// 	add HttpClientModule to array of imports in @NgModule	// alt:  HttpModule
// 	*Provides ability to make HTTP requests.
// 4) DEPENDENCY INJECTION:
// 	in http.service.ts:
// 		import { HttpClient } from '@angular/common/http';
// 		In constructor method for HttpService, set up parameters as (private _http: HttpClient)
// 			*Underscore is convention that indicates it is something that will be injected
// 	in app.component.ts:
// 		import { HttpService } from './http.service';
// 		In constructor method for AppComponent, set up parameters as (private _httpService: HttpService)
// 	Back in http.service.ts
// 		Define a function with the behavior you want in TypeScript format in HttpService.
// 		Example:
// 		getTasks() {
// 			let tempObservable = this._http.get("/tasks");
// 			tempObservable.subscribe( data => console.log("Get our tasks!", data) )
// 		}
// 		*Run getTasks() in constructor








