import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {MainComponent} from "./main.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: MainComponent}
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
