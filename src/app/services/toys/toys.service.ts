import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';

@Injectable()
export class ToysService {
  
	constructor(private http: Http) {}

  	getToys() {
  		return this.http.get('/api/toys.json')
  		  .map(res => res.json())
  		  .catch(err => Observable.throw(err.statusText));
  	}

}