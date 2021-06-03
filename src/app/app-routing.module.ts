import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ManageFlightComponent } from './components/manage-flight/manage-flight.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchFlightComponent } from './components/search-flight/search-flight.component';

const routes: Routes = [

{path:'index',redirectTo:'/login',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'searchflight',component:SearchFlightComponent},
{path:'manageFlight',component:ManageFlightComponent},
//redirect to the page if the route does not match
{path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
