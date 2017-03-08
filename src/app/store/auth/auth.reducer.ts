import { Action } from 'redux'
import { IAuthState } from '../';
import { AUTH } from './auth.action';

export const defaultAuth: IAuthState = {
	connected: false,
	opened: false
}

export function authReducer(state: IAuthState = defaultAuth, action: Action) {
	switch(action.type) {

		case AUTH.OPEN:
			return Object.assign({}, state, { opened: true });

		case AUTH.CLOSE:
			return Object.assign({}, state, { opened: false });

		case AUTH.CONNECTED:
			return Object.assign({}, state, { connected: false });

		default: 
			return state;

	}
}