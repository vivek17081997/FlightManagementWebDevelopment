import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loginrequestmodel } from 'src/app/models/account/loginrequestmodel';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private service:AccountService) { }

  ngOnInit(): void {
  }

  LoginClickEvent(email:string,password:string){   
     debugger;   
     var data:Loginrequestmodel={ 
           EmailId:email,  
         Password:password   
     };   
    var response = this.service.loginService(data).subscribe(res=>{   
       console.log("data",res);     
       alert(JSON.stringify(res));
        let result = JSON.stringify(res);
  
        if(res.ResponseCode==200){  
          alert("Authorized user");  
          //todo vivek save the token  for the future use and refreshing token
          //localStorage.setItem()    
   }      
  else if(res.ResponseCode==400){ 
          alert("Unauthorized user");   
     }     
    else{      
      alert("Internal Server Error");
        }      
     
      },(err:HttpErrorResponse)=>{    
      alert("User does not exist");   
   }) 
 }

}
