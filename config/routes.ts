export default [
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
    path: '/preview',
    name: 'preview',
    component: './Preview',
  },
  {
    component: './404',
  },
];
