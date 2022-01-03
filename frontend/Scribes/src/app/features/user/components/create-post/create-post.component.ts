import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../post/services/post.service";
import {map} from "rxjs/operators";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

createPostForm= new FormGroup({
  title: new FormControl('',Validators.required),
  description: new FormControl('',Validators.required)
})

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    this.getCategories()
  }

  createPost() {
    const post ={
      title:this.createPostForm.get('title')?.value,
      description:this.createPostForm.get('description')?.value,
    }
    this.postService.createPost(post)
  }
  getCategories(){
 //   return this.postService.getCategories()
  }
}
