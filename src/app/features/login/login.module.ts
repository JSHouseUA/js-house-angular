import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
