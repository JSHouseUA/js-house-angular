import { Component, OnInit } from '@angular/core';
import {MenuService} from "../main.services/menu.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public menuService: MenuService) { }

  ngOnInit() {
  }

}
