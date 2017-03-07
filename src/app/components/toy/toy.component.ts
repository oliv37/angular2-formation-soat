import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-toy',
  templateUrl: './toy.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToyComponent {
	@Input() toy;
	@Output() onSelect = new EventEmitter();

	select(toy) {
		this.onSelect.emit(toy);
	}
	
}
