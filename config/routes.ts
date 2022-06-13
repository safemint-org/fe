export default [
  {
    path: '/home',
    name: 'home',
    component: './home',
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
    path: '/explore',
    name: 'explore',
    component: './Explore',
  },
  {
    component: './404',
  },
];
