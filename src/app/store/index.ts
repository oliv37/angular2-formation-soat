import { combineReducers, Reducer } from 'redux';
import { toysReducer, defaultToys } from './toys/toys.reducer';
import { authReducer, defaultAuth } from './auth/auth.reducer';


export interface IToy {
	icon: string;
	price: number;
	title: string;
	selected?: boolean;
}

export interface IToysState {
	count: number;
	toys: IToy[];
	price: number;
}

export interface IAuthState {
	connected: boolean;
	opened: boolean;
}

export interface IAppState {
	toysReducer: IToysState;
	authReducer: IAuthState;
}

export const defaultState: IAppState = {
	toysReducer: defaultToys,
	authReducer: defaultAuth
}

export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
	toysReducer,
	authReducer
});