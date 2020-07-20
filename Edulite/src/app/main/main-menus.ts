import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/main/student/dashboard',
    home: true,
  },
  {
    title: 'Schedule',
    icon: 'calendar',
    link: '/main/student/schedule',
  },
  {
    title: 'Grades',
    icon: 'pie-chart',
    link: '/main/student/grades',
  },
  {
    title: 'Homework',
    icon: 'edit-2',
    link: '/main/student/homework',
  },
  {
    title: 'Notice Board',
    icon: 'file-text',
    link: '/main/student/noticeboard',
  },
];
