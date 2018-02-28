import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
    this.authService.register(this.email,this.password)
                    .then((res)=>{
                      this.flashMessagesService.show("Register Successful",{cssClass:"alert-success",tomeout:2000});
                      this.router.navigate(['/']);
                    })
                    .catch((err)=>{
                      this.flashMessagesService.show(err.message,{cssClass:"alert-danger",tomeout:2000});
                      this.router.navigate(['/register']);
                    })

  }

}
