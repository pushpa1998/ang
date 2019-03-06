import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ServiceComponent } from './service/service.component';
const appRoutessss: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contact', component: ContactComponent},  
  {path: 'login', component: LoginComponent},
  {path: 'service', component: ServiceComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    LoginComponent,
    ServiceComponent
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutessss),
    HttpClientModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
