import { Injectable } from '@angular/core';
import {HttpClient, HTTP_INTERCEPTORS} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {UserSession} from "../../shared/models/UserSession";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private _router: Router) { }

  public login(email:String,password:String){
    return this.http.post<UserSession>(`${environment.apiUrl}/auth/signin`,{
      email:email,
      password:password
    }).subscribe(response =>{
      const user = new UserSession(
        response.accessToken,
        response.id,
        response.email,
        response.roles,
        response.fullName
      )
      localStorage.setItem('token',user.accessToken)
      localStorage.setItem('email',user.email)
      for (let i=0;i<user.roles.length;i++)
        localStorage.setItem(`roles ${i}`,user.roles[i])
      localStorage.setItem('fullName',user.fullName)
      localStorage.setItem('id',user.id)
      this._router.navigate(["./home"])
    })
  }

  public registration(fullName:String,email:String,password:String){
    return this.http.post( `${environment.apiUrl}/auth/signup`,{
      fullName: fullName,
      email:email,
      password:password
    })
      .subscribe(response=>{
        this._router.navigate(["/confirmEmail"])
      },err =>{
        console.log(err.message)
      })
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logOut(){
    localStorage.clear()
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
}
