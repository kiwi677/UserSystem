import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from '../../services/user.service';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id:string;
  user:User={
  name:"",
  email:"",
  phone:"",
  balance:0
  }
  diasbleBalanceOnEdit:boolean=true;

  constructor(
    public flashMessagesService:FlashMessagesService,
    public router:Router,
    public route:ActivatedRoute,
    public userService:UserService
  ) { }

  ngOnInit() {
    this.id=this.route.snapshot.params["id"];
    this.userService.getUser(this.id).subscribe(user=>{
      this.user=user;
    })
    this.diasbleBalanceOnEdit=false;
  }

  onSubmit({value,valid}:{value:User,valid:boolean}){
    if(!valid){
      this.flashMessagesService.show('Please write the ringt information！', { cssClass: 'alert-danger', timeout: 3000 });
      this.router.navigate(["edit-user/"+this.id]);
    }else{
      this.userService.updateUser(this.id,value).subscribe(user=>{
        this.flashMessagesService.show('Update Successful！', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(["/user/"+this.id]);    
      })

    }

  }
}
