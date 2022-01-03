import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Category} from "../../../shared/models/Category";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http:HttpClient
  ) { }

  createPost(post:any){

    this.http.post(`${environment.apiUrl}/posts`,post).subscribe(res=>{
      console.log("done")
    },error=>{
      console.log(error)
    })
  }

  /*
  category: Category={
    categoryId: "",
    users: [],
    categoryName:""
  }
categories: any
  getCategories(){
    this.http.get<any>(`${environment.apiUrl}/categories`)
      .pipe(map(res => {
          const categories =[]
          for (const key in res) {
            categories.push(res[key])
          }
          return categories
        }
      ))

      .subscribe(res=>{
        this.categories= res
        console.log(this.categories)
      })



  }

  */

}
