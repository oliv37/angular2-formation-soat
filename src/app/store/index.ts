import { combineReducers, Reducer } from 'redux';
import { toysReducer, defaultToys } from './toys/toys.reducer';


export interface IToy {
	icon: string;
	price: number;
	title: string;
	selected?: boolean;
}

export interface IToysReducer {
	count: number;
	toys: IToy[];
	price: number;
}

export interface IAppState {
	toysReducer: IToysReducer;
}

export const defaultState: IAppState = {
	toysReducer: defaultToys
}

export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
	toysReducer
});