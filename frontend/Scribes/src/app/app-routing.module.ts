import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./general/containers/login/login.component";
import {RegisterComponent} from "./general/containers/register/register.component";
import {HomeComponent} from "./general/containers/home/home.component";
import {UserProfileComponent} from "./features/user/containers/user-profile/user-profile.component";
import {ConfirmEmailComponent} from "./general/containers/confirm-email/confirm-email.component";
import {AuthGuard} from "./core/guards/auth/auth.guard";
import {UserSettingsComponent} from "./features/user/containers/user-settings/user-settings.component";


let ProfileComponent;
const routes: Routes = [
  {
    path:"login",
    component: LoginComponent,
  },
  {
    path:"register",
    component: RegisterComponent,
  },
  {
    path:"profile",
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"",
    redirectTo: "home",
    pathMatch:'full'
  },
  {
    path:"settings",
    component: UserSettingsComponent
  },
  {
    path:"confirmEmail",
    component: ConfirmEmailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
