import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {User} from "../../../shared/models/User";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {UserSession} from "../../../shared/models/UserSession";


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
    private http: HttpClient,
    private _router:Router,
  ) {
  }

  userProfile(id: any) {
    return this.http.get<User>(`${environment.apiUrl}/user/${id}`)

  }


  updateGeneralInfo(
      fullName:string,
      bio: string,
      phone:string,
      address:string
  ){
    this.http.put<UserSession>(`${environment.apiUrl}/user/changeGeneralInfos/${localStorage.getItem('id')}`,{
      fullName:fullName,
      bio: bio,
      phone:phone,
      address:address
    }).subscribe(
      response=>{
        console.log("emshiiii")
        this._router.navigate(['/profile'])
        console.log("done")
      },error=>{
        console.log(error)
      }
    )
  }

  changePassword(password:string){
    this.http.put(`${environment.apiUrl}/user/changePassword/${localStorage.getItem('id')}`,{
      password: password
    })
      .subscribe(
      res=>{
        this._router.navigate(['/profile'])
        console.log(res)
      },err=>{
        console.log(err)
      }
    )
  }
 /* updateUserProfile(id: string, fullName: string, email: string, bio: string, phone: string, adress: string) {
    this.http.put<any>(`${environment.apiUrl}/changeGeneralInfos/${localStorage.getItem('id')}`, {
      id: id,
      fullName: fullName,
      email: email,
      bio: bio,
      phone: phone,
      adress: adress
    }).subscribe(res => {
      console.log("done")
    }, err => {
      console.log(err.message)
    })
  }
*/
  changeProfilePic(file: File) {
    const formData: FormData = new FormData();

    formData.append('file', file);

    this.http.post(`${environment.apiUrl}/user/uploadProfilePic`,formData).subscribe(
      res=>{
        console.log('done')
      },err =>{
        console.log(err.message)
      })
  }



}
