import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import { ReactiveFormsModule }   from '@angular/forms';


const routes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
    imports: [
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule { }
