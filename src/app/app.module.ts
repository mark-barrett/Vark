import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { PostService } from './services/post.service';
import { FriendService } from './services/friend.service';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FriendsComponent } from './components/friends/friends.component';
import { UserComponent } from './components/user/user.component';
import { AddFriendComponent } from './components/add-friend/add-friend.component';

// Create routes
const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'news-feed', component:NewsFeedComponent},
  {path:'profile', component:ProfileComponent},
  {path:'logout', component:LogoutComponent},
  {path:'friends', component:FriendsComponent},
  {path:'user/:id', component:UserComponent},
  {path:'add-friend/:id', component:AddFriendComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    NewsFeedComponent,
    LogoutComponent,
    ProfileComponent,
    FriendsComponent,
    UserComponent,
    AddFriendComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [
    DataService,
    PostService,
    FriendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
