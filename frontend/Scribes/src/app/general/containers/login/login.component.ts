import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/Auth/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form= new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('',[
      Validators.required,
    ])
})

  get email(){
    return this.form.get('email')
  }
  get password(){
    return this.form.get('password')
  }

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.email?.value,this.password?.value)
  }

}
