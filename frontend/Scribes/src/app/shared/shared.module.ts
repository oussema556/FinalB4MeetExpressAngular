import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostComponent} from "./components/post/post.component";
import { LikeComponent } from './components/reacts/like/like.component';
import { CommentComponent } from './components/reacts/comment/comment.component';
import { ReportComponent } from './components/reacts/report/report.component';
import { MiniPostComponent } from './components/mini-post/mini-post.component';
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [
     PostComponent,
     LikeComponent,
     CommentComponent,
     ReportComponent,
     MiniPostComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
    exports: [
        PostComponent,
        LikeComponent,
        MiniPostComponent
    ]
})
export class SharedModule { }
