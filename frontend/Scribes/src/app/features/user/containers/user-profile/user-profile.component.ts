import {Component, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../../../shared/models/User";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent implements OnInit {
  id = localStorage.getItem('id')
  //img = "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="
  phoneEditable= false

  editPhoneForm= new FormGroup({
  phone: new FormControl('',Validators.required)
})


  constructor(
    private userService: UserService,
    private renderer: Renderer2
    ) {

  }


  ngOnInit(): void {
    this.getUserProfile()
  }

  user: User = {
    userId: null,
    fullName: null,
    email: null,
    bio: null,
    profilePic: null,
    coverPic: null,
    address: null,
    createdAt: null,
    posts: null,
    phone: null,
    favoriteCategories: null,
  }

  editPhone(){
    this.phoneEditable=!this.phoneEditable
    this.user.phone= this.editPhoneForm.get('phone')?.value
    //this.userService.updateGeneralInfo(this.user)
  }
  getUserProfile() {
    return this.userService.userProfile(this.id)
      .subscribe(res => {
        this.user.userId = res.userId
        this.user.fullName = res.fullName
        this.user.email = res.email
        this.user.bio = res.bio
        this.user.profilePic = res.profilePic
        this.user.coverPic = res.coverPic
        this.user.address = res.address
        this.user.createdAt = res.createdAt
        this.user.phone = res.phone
        this.user.posts = res.posts
        this.user.favoriteCategories = res.favoriteCategories
        console.log(res)
        if (typeof this.user.profilePic === "string") {
          localStorage.setItem('profilePic', this.user.profilePic)
        }


      })
  }


  updateProfileInfo() {
    console.log("done")
    this.user.bio="hassen ena rani"
    console.log(this.user)
     //this.userService.updateGeneralInfo(this.user)
  }



  // TOGGLE JUMBOTRON
  jumbotronIsOpened=false
  openJumbotron() {
    this.jumbotronIsOpened=true
    console.log(this.jumbotronIsOpened)
  }
}
