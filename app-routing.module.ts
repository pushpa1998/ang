import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoComponent } from './logo/logo.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path : 'logo', component:LogoComponent},
  {path : 'home', component:HomeComponent},
  {path : 'about', component:AboutComponent},
  {path : 'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
         
  exports: [RouterModule]
})
export class AppRoutingModule { }
