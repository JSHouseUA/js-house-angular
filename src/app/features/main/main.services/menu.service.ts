import {MenuItem} from "../../../core/models/ui/menu";
export class MenuService {
  menu: MenuItem[] = [
    {path: '/users', title: 'Пользователи', icon: 'account_circle', background: 'https://images.huffingtonpost.com/2016-04-19-1461067166-2010535-slaves-thumb.jpg'},
    {path: '/stats', title: 'Статистика', icon: 'show_chart', background: 'http://www.joshuanhook.com/wp-content/uploads/2017/06/statistics-denial-statistics-debacles-Malfeasance.jpg'},
    {path: '/events', title: 'Мероприятия', icon: 'event', background: 'https://media1.tenor.com/images/3fc7532f4885e135604040f0576b1ec3/tenor.gif?itemid=4858758'},
    {path: '/quizzes', title: 'Опросы', icon: 'check_circle', background: 'http://www.mrmediatraining.com/wp-content/uploads/2014/05/Man-on-the-Street-Interview.jpg'},
    {path: '/settings', title: 'Настройки', icon: 'settings', background: 'https://www.linkedinsights.com/wp-content/uploads/2018/03/Settings-Metal-1080x675.png'}
  ];
}
