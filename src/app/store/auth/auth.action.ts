import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../';

export const AUTH = {
	OPEN: 'AUTH_OPEN',
	CLOSE: 'AUTH_CLOSE',
	CONNECTED: 'AUTH_CONNECTED'
}

@Injectable()
export class AuthActions {
	constructor(
		private store: NgRedux<IAppState>
	) {}

	open() {
		this.store.dispatch({
			type: AUTH.OPEN
		});
	}

	close() {
		this.store.dispatch({
			type: AUTH.CLOSE
		});
	}

	connect() {
		this.store.dispatch({
			type: AUTH.CONNECTED
		});
	}
}