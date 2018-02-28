import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user:User={
    name:"",
    email:"",
    phone:"",
    balance:0

  }
  disableBalanceOnAdd:boolean=true;

  constructor(
    public flashMessagesService:FlashMessagesService,
    public router:Router,
    public userService:UserService,
    public settingsService:SettingsService,

  ) { }

  ngOnInit() {
    this.disableBalanceOnAdd=this.settingsService.getSettings().disableBalanceOnAdd;

  }
  

  onSubmit({value,valid}:{value:User,valid:boolean}){
    if(this.disableBalanceOnAdd){
      value.balance=0;
    }
    if(!valid){
      this.flashMessagesService.show('请填写正确的信息！', { cssClass: 'alert-danger', timeout: 3000 });
      this.router.navigate(["add-user"]);
    }else{
      this.userService.newUser(value).subscribe(user=>{
        this.flashMessagesService.show('添加成功！', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(["/"]);    
      })

    }

  }

}
