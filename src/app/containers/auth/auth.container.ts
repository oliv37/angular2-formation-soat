import { Component } from '@angular/core';
import { AuthActions } from '../../store/auth/auth.action';
import { Observable } from 'rxjs/Rx';
import { select } from '@angular-redux/store';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-container',
  templateUrl: './auth.html'
})
export class AuthContainer {

	@select(state => state.authReducer.opened) isOpened: Observable<boolean>;

	user = {
		login: null,
		pass: null
	};
	
	constructor(
		private authActions: AuthActions,
		private router: Router
		) {}

	close() {
		this.authActions.close();
	}

	submit() {
		this.router.navigate(['/basket']);
		this.close();
	}

}
