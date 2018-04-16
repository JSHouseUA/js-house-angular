import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../../core/models/ui/menu';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  test = 'test for data binding';
  menuItems: MenuItem[] = [
    {path: '/users', title: 'Пользователи', icon: 'account_circle'},
    {path: '/stats', title: 'Статистика', icon: 'show_chart'},
    {path: '/events', title: 'Мероприятия', icon: 'event'},
    {path: '/quizzes', title: 'Опросы', icon: 'check_circle'},
      {path: '/settings', title: 'Настройки', icon: 'settings'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
