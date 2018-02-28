import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from '../../models/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id:string;
  user:object;
  hasBalance:boolean=true;
  showBalanceUpdateInput:boolean=false;

  constructor(
    public route:ActivatedRoute,
    public userService:UserService,
    public flashMessagesService:FlashMessagesService,
    public router:Router
  ) { }

  ngOnInit() {
    this.id=this.route.snapshot.params["id"];
    this.userService.getUser(this.id).subscribe(user=>{
      if(user.balance>0){
        this.hasBalance=false;
      }
      this.user=user;
    })
  }

  updateBalance(id:string){
    this.userService.updateUser(this.id,this.user).subscribe(user=>{
     this.flashMessagesService.show("Update Success",{cssClass:"alert-success",timeout:2000}) ;
     this.showBalanceUpdateInput=false;
     this.router.navigate(['/user/'+this.id])

    })
  }

  onDeleteClick(){
    if(confirm("Are you sure to delete "+ this.id +" ?")){
      this.userService.deleteUser(this.id).subscribe(user=>{
        this.flashMessagesService.show("Delete Successful",{cssClass:"alert-success",tomeout:2000});
        this.router.navigate(['/']);
      })
    }
  }

}
