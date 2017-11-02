import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { PostService } from './services/post.service';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { LogoutComponent } from './components/logout/logout.component';

// Create routes
const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'news-feed', component:NewsFeedComponent},
  {path:'logout', component:LogoutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    NewsFeedComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [
    DataService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
