import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user/containers/user-profile/user-profile.component';
import { ProfilePostsComponent } from './user/components/profile-posts/profile-posts.component';
import {ChangeProfilePicComponent} from "./user/components/change-profile-pic/change-profile-pic.component";
import {ReactiveFormsModule} from "@angular/forms";
import { CreatePostComponent } from './user/components/create-post/create-post.component';
import { SettingsSidebarComponent } from './user/components/settings-sidebar/settings-sidebar.component';
import { UserSettingsComponent } from './user/containers/user-settings/user-settings.component';
import {SecurityFormComponent} from "./user/components/security-form/security-form.component";
import {GeneralInfoFormComponent} from "./user/components/general-info-form/general-info-form.component";



@NgModule({
    declarations: [
        UserProfileComponent,
        ProfilePostsComponent,
        ChangeProfilePicComponent,
        CreatePostComponent,
        SettingsSidebarComponent,
        SecurityFormComponent,
        GeneralInfoFormComponent,
        UserSettingsComponent,
    ],
    exports: [
        UserProfileComponent,
        SecurityFormComponent,
        GeneralInfoFormComponent,
        UserSettingsComponent,


    ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FeaturesModule { }
