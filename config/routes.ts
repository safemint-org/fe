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
    path: '/explore',
    name: 'explore',
    component: './Explore',
  },
  {
    path: '/preview',
    name: 'preview',
    component: './Preview',
  },

  {
    path: '/',
    redirect: '/home',
  },
  {
    component: './404',
  },
];
