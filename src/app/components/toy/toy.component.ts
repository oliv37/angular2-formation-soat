import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toy',
  templateUrl: './toy.html'
})
export class ToyComponent {
	@Input() toy;
	
}
