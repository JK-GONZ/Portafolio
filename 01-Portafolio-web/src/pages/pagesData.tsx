import App from '@app/App.tsx';
import { routerType } from '../types/router.types.tsx';
import About from './About/index.tsx';
import Home from './Home/index.tsx';

const pagesData: routerType[] = [
  {
    path: '',
    element: <App />,
    title: 'about',
  },
  {
    path: 'home',
    element: <Home />,
    title: 'home',
  },
  {
    path: 'about',
    element: <About />,
    title: 'about',
  },
];

export default pagesData;