import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
// import * createLogger from 'redux-logger';
import { rootReducer, IAppState, defaultState } from './store';

import { AppComponent } from './app.component';
import { HeaderContainer } from './containers/header/header.container';
import { ToysContainer } from './containers/toys/toys.container';
import { AuthContainer } from './containers/auth/auth.container';
import { BasketContainer } from './containers/basket/basket.container';

import { ToysService } from './services/toys/toys.service';
import { ToysActions } from './store/toys/toys.action';
import { AuthActions } from './store/auth/auth.action';

import { appRoutes } from './app.routes';

// Container -> rôle logique, récupérations des données (services)
// Component  -> pas de récupération de données, pas de dépendances, uniquement affichage, relation parent enfant

@NgModule({
  declarations: [
    AppComponent,
    HeaderContainer,
    ToysContainer,
    AuthContainer,
    BasketContainer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    NgReduxModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ToysService, ToysActions, AuthActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, defaultState, []);
  }
}
