import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:boolean;
  loggedInUser:string;

  constructor(
    public authService:AuthService,
    public flashMessagesService:FlashMessagesService,
    public router:Router,
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth=>{
      if(auth){
        this.isLoggedIn=true;
        this.loggedInUser=auth.email;
      }else{
        this.isLoggedIn=false;
      }
    })
  }
  onLogoutClick(){
    this.authService.logout();
    this.flashMessagesService.show("Logout Successful!",{cssClass:"alert-success",timeout:2000});
    this.router.navigate(['/login']);
  }

}
