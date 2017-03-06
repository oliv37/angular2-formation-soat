import { Component } from '@angular/core';

@Component({
  selector: 'toys-container',
  templateUrl: './toys.html'
})
export class ToysContainer {
	toys = [
	  {
	    "title": "ball",
	    "icon": "airballoon",
	    "price": 5,
	    "selected": true
	  },
	  {
	    "title": "plane",
	    "icon": "airplane",
	    "price": 35
	  },
	  {
	    "title": "ambulance",
	    "icon": "ambulance",
	    "price": 15
	  },
	  {
	    "title": "robot",
	    "icon": "android",
	    "price": 40
	  },
	  {
	    "title": "bike",
	    "icon": "bike",
	    "price": 250
	  }
  ];

}
