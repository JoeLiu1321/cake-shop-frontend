import { Component} from '@angular/core';
import { BackendApiService} from '../backend-api.service';
@Component({
  selector: 'app-add-member-page',
  templateUrl: './add-member-page.component.html',
  styleUrls: ['./add-member-page.component.css']
})
export class AddMemberPageComponent{
  inviteCode;
  email;
  constructor(private api:BackendApiService){
  
  }


  onInvite(inviteCode){
    this.api.isAccountExisted(inviteCode).subscribe(resp=>{
      if(resp.status){
        if(window.confirm(`確認選擇 ${resp.object}當邀請人嗎?`))
        this.inviteCode=inviteCode;
      }
      else
        window.alert('找不到此帳戶');  
    })
  }

  onValidate(email){
    this.api.validateMail(email).subscribe(
      resp=>{
        if(resp.status)
          this.email=email
        else
          window.alert(resp.message)
    })
  }


}