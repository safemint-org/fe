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
    name: 'Explore',
    component: './Explore',
  },
  {
    path: '/preview',
    name: 'preview',
    component: './Preview',
  },

  {
    path: '/',
    redirect: '/submit',
  },
  {
    component: './404',
  },
];
