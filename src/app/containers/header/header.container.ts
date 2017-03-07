import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { select } from '@angular-redux/store';

@Component({
  selector: 'header-container',
  templateUrl: './header.html'
})
export class HeaderContainer {

	@select(state => state.toysReducer.count) count: Observable<number>;

}
