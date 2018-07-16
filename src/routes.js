import App from './components/App/App';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/dashboard';

const routes = [
  {
    component: App,

    routes: [
      {
        path: '/',
        exact: true,
        component: Login,
      },
      {
        path: '/dashboard',
        component: Dashboard,
      },
    ],
  },
];

export default routes;
