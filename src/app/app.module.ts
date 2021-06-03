import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ManageFlightComponent } from './components/manage-flight/manage-flight.component';
import { SearchFlightComponent } from './components/search-flight/search-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManageFlightComponent,
    SearchFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
