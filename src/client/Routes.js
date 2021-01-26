import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AboutUs from './pages/AboutUs';
import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
    
      {
        path: '/aboutus',
        ...AboutUs,
        exact: true
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
