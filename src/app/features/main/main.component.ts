import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../../core/models/ui/menu';
import {MenuService} from "./main.services/menu.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  test = 'test for data binding';


  constructor(public menuService: MenuService) {
  }

  ngOnInit() {
  }

}
