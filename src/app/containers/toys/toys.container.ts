import { Component, OnInit } from '@angular/core';
import { ToysActions } from '../../store/toys/toys.action';
import { Observable } from 'rxjs/Rx';
import { select } from '@angular-redux/store';
import { IToy } from '../../store';

@Component({
  selector: 'toys-container',
  templateUrl: './toys.html'
})
export class ToysContainer implements OnInit {

	@select(state => state.toysReducer.toys) toys: Observable<IToy[]>;
	
	constructor(private toysActions: ToysActions) {}

	ngOnInit() {
		this.toysActions.getToys();
		/*
		this.toys = this.toysService.getToys();
		
		this.toysService.getToys().subscribe(
			toys => this.toys = toys,
			err => console.log(err)
		);
		*/
	}

	selectToy(toy: IToy) {
		this.toysActions.selectToy(toy);
	}

}
