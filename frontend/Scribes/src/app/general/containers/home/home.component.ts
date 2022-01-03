import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  likeStatus = false

  isLiked() {
    this.likeStatus = !this.likeStatus
    console.log(this.likeStatus)
  }
}
