import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Loginrequestmodel } from '../models/account/loginrequestmodel';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) {

   }

  loginService(login:Loginrequestmodel):Observable<any>{
      var options= {headers :new HttpHeaders({'Content-Type':'application/json'})};  
      var body= JSON.stringify(login);    
      var result=this.http.post(environment.baseUrl+environment.loginApi,login,options).pipe(map((response:any)=> response))  
      return result;  
  }

}
