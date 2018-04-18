import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DynamicContainer} from './directives/dynamic-container';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DynamicContainer
  ]
})
export class CoreModule { }
