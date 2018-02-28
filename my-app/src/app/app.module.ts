import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//引入路由
import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

//引入组件
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { componentFactoryName } from '@angular/compiler';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFountComponent } from './components/page-not-fount/page-not-fount.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingComponent } from './components/setting/setting.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
//引入服务
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { SettingsService } from './services/settings.service'

//设置路由
const appRoutes:Routes=[
  {path:"",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"user",component:UsersComponent,canActivate:[AuthGuard]},
  {path:"userdetail",component:UserDetailComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"add-user",component:AddUserComponent,canActivate:[AuthGuard]},
  {path:"user/:id",component:UserDetailComponent,canActivate:[AuthGuard]},
  {path:"edit-user/:id",component:EditUserComponent,canActivate:[AuthGuard]}
]

export const firebaseConfig = {
  apiKey: "AIzaSyBHs_JhhheUqON08sEAsmLvCRRpL3VqMKY",
  authDomain: "mingxusers.firebaseapp.com",
  databaseURL: "https://mingxusers.firebaseio.com",
  //projectId: "mingxusers",
  storageBucket: "mingxusers.appspot.com",
  messagingSenderId: "386236006772"
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AddUserComponent,
    EditUserComponent,
    LoginComponent,
    PageNotFountComponent,
    RegisterComponent,
    SettingComponent,
    SidebarComponent,
    UsersComponent,
    UserDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule
  ],
  providers: [
    UserService,
    AngularFireAuth,
    AuthService,
    AuthGuard,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
