import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ManageFlightComponent } from './components/manage-flight/manage-flight.component';
import { SearchFlightComponent } from './components/search-flight/search-flight.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManageFlightComponent,
    SearchFlightComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//to use the http request in the application
    FormsModule// to use the angular forms features in the application
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
