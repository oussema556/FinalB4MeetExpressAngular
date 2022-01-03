import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  formIsGeneral= true;

  constructor() { }
  formIsGeneralFn(){
    this.formIsGeneral=!this.formIsGeneral
    console.log(this.formIsGeneral)
  }
  ngOnInit(): void {
  }

}
