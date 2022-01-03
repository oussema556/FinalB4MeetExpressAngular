import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/Auth/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  message:String=""

  form= new FormGroup({
    fullName: new FormControl('',Validators.required),
    email: new FormControl('',[
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('',[
      Validators.required,
    ])
  })

  get fullName(){
    return this.form.get('fullName')
  }
  get email(){
    return this.form.get('email')
  }
  get password(){
    return this.form.get('password')
  }

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }


  public register() {
    this.authService.registration(this.fullName?.value,this.email?.value,this.password?.value)
    }



  isValidated(){
    return false
  }

}
