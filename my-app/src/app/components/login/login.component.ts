import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  constructor(
    public authService:AuthService,
    public flashMessagesService:FlashMessagesService,
    public router:Router,

  ) { }

  ngOnInit() {
  }
  onSubmit(){
    this.authService.login(this.email,this.password)
                    .then((res)=>{
                      this.flashMessagesService.show("Login Successful",{cssClass:"alert-success",tomeout:2000});
                      this.router.navigate(['/']);
                    })
                    .catch((err)=>{
                      this.flashMessagesService.show(err.message,{cssClass:"alert-danger",tomeout:2000});
                      this.router.navigate(['/login']);
                    })

  }

}
