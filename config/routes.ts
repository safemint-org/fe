﻿export default [
  {
    path: '/home',
    name: 'home',
    component: './Home',
  },
  {
    path: '/submit',
    name: 'submit',
    component: './submit',
  },
  {
    path: '/',
    redirect: '/submit',
  },
  {
    component: './404',
  },
];
