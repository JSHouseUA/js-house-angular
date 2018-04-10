import {MaterialModule} from "./material.module";
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";


@NgModule({

  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule
  ]

})
export class SharedModule {
}
