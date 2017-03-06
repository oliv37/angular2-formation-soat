import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToyComponent } from './toy/toy.component';

const components = [
  ToyComponent
];

@NgModule({
  imports: [ BrowserModule ],
  exports: [ ...components ],
  declarations: [ ...components ]
})
export class ComponentsModule { }
