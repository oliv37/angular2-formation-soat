import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AuthActions } from '../../store/auth/auth.action';
import { select } from '@angular-redux/store';

@Component({
  selector: 'header-container',
  templateUrl: './header.html'
})
export class HeaderContainer {

	@select(state => state.toysReducer.count) count: Observable<number>;

	constructor(private authActions: AuthActions) {}

	goToPanier() {
		this.authActions.open();
	}

}
