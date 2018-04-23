import { NgModule } from '@angular/core';
import {LoginComponent} from "./login.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import { ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';


const routes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
    imports: [
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild(routes),
        HttpClientModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule { }
