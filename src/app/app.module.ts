import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { HeaderContainer } from './containers/header/header.container';
import { ToysContainer } from './containers/toys/toys.container';


// Container -> rôle logique, récupérations des données (services)
// Component  -> pas de récupération de données, pas de dépendances, uniquement affichage, relation parent enfant

@NgModule({
  declarations: [
    AppComponent,
    HeaderContainer,
    ToysContainer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
