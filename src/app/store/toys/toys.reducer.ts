import { Action } from 'redux'
import { IToysState } from '../';
import { TOYS } from './toys.action';

export const defaultToys: IToysState = {
	count: 0,
	toys: [],
	price: 0
}

export function toysReducer(state: IToysState = defaultToys, action: Action) {
	switch(action.type) {

		case TOYS.GET_TOYS_START:
			return state;

		case TOYS.GET_TOYS_SUCCESS:
			return Object.assign(
				{}, 
				state, 
				{ toys: action['toys'] }
			);

		case TOYS.SELECT_TOY:
			const newToys = JSON.parse(JSON.stringify(state.toys));

			newToys.map(item => {
				item.selected = item.title === action['toy']['title'] ?
					!item.selected : item.selected;
					
				return item;
			});

			const nbSelected = newToys.filter(item => item.selected).length;

			return Object.assign({}, state, {
				toys: newToys,
				count: nbSelected
			});

		default: 
			return state;

	}
}